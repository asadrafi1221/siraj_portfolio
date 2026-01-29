import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Sidebar } from './Sidebar';
import { ChatMessage } from './ChatMessage';
import { InputArea } from './InputArea';
import { Message, ModelId } from '../types';
import { streamMessage, resetChat } from '../services/geminiService';
import { INITIAL_MESSAGE } from '../constants';
import { PanelLeftOpen, ArrowLeft, MoreHorizontal } from 'lucide-react';

interface ChatInterfaceProps {
  onBack: () => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ onBack }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentModel, setCurrentModel] = useState<ModelId>(ModelId.FLASH);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      role: 'model',
      text: INITIAL_MESSAGE,
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleNewChat = () => {
    resetChat();
    setMessages([{
      id: uuidv4(),
      role: 'model',
      text: INITIAL_MESSAGE,
      timestamp: Date.now(),
    }]);
    setInput('');
    setIsLoading(false);
  };

  const handleModelChange = (modelId: ModelId) => {
    setCurrentModel(modelId);
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setIsLoading(true);

    const userMessage: Message = {
      id: uuidv4(),
      role: 'user',
      text: userText,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);

    const aiMessageId = uuidv4();
    const aiMessagePlaceholder: Message = {
      id: aiMessageId,
      role: 'model',
      text: '',
      isStreaming: true,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, aiMessagePlaceholder]);

    try {
      const stream = streamMessage(currentModel, userText);
      let fullResponse = '';

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages((prev) => 
          prev.map((msg) => 
            msg.id === aiMessageId 
              ? { ...msg, text: fullResponse } 
              : msg
          )
        );
      }

      setMessages((prev) => 
        prev.map((msg) => 
          msg.id === aiMessageId 
            ? { ...msg, isStreaming: false } 
            : msg
        )
      );
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: uuidv4(),
          role: 'model',
          text: 'Sorry, I encountered an error processing your request. Please try again.',
          timestamp: Date.now(),
        },
      ]);
      setMessages((prev) => prev.filter(msg => msg.id !== aiMessageId || msg.text.length > 0));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full bg-white text-zinc-900 overflow-hidden relative selection:bg-black selection:text-white">
      {/* Global Ambient Background for Chat - Lyra Style */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-50/40 blur-[100px] mix-blend-multiply opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-50/40 blur-[100px] mix-blend-multiply opacity-50"></div>
      </div>

      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        currentModel={currentModel}
        setModel={handleModelChange}
        onNewChat={handleNewChat}
      />

      <main className="flex-1 flex flex-col h-full relative min-w-0 z-10 transition-all duration-300">
        {/* Mobile Header */}
        <div className="sticky top-0 z-20 bg-white/70 backdrop-blur-xl border-b border-zinc-200/50 p-4 flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="btn-lyra-icon -ml-2"
            >
              <PanelLeftOpen size={20} />
            </button>
            <span className="font-bold text-zinc-900 font-display">Run 1.0</span>
          </div>
          <button onClick={onBack} className="btn-lyra-secondary px-3 py-1.5 text-xs">Exit</button>
        </div>
        
        {/* Desktop Controls */}
        <div className="absolute top-6 left-6 z-20 hidden lg:flex gap-2">
            {!isSidebarOpen && (
             <button 
              onClick={() => setIsSidebarOpen(true)}
              className="btn-lyra-icon bg-white/40 backdrop-blur-sm"
              title="Open Sidebar"
            >
              <PanelLeftOpen size={20} />
            </button>
            )}
        </div>
        
        {/* Exit Button Desktop */}
         <div className="absolute top-6 right-6 z-20 hidden lg:flex items-center gap-2">
            <button className="btn-lyra-icon bg-white/40 backdrop-blur-sm">
                <MoreHorizontal size={20} />
            </button>
            <button onClick={onBack} className="btn-lyra-secondary bg-white/40 backdrop-blur-sm hover:bg-white px-4 py-2.5 text-sm">
              <ArrowLeft size={16} /> Back
            </button>
         </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-4 py-8 scroll-smooth no-scrollbar">
          <div className="max-w-3xl mx-auto flex flex-col justify-end min-h-full pb-4">
            {messages.length === 0 ? (
               <div className="flex-1 flex flex-col items-center justify-center text-zinc-400 space-y-4 opacity-50">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center">
                    <span className="w-2 h-2 bg-zinc-400 rounded-full animate-ping"></span>
                  </div>
                  <p className="font-display font-medium">Start a conversation...</p>
               </div>
            ) : (
              messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))
            )}
            <div ref={messagesEndRef} className="h-4" />
          </div>
        </div>

        {/* Input Area */}
        <div className="w-full bg-gradient-to-t from-white via-white/80 to-transparent pt-12 pb-6 backdrop-blur-[2px]">
          <InputArea 
            input={input} 
            setInput={setInput} 
            onSend={handleSendMessage} 
            isLoading={isLoading} 
          />
        </div>
      </main>
    </div>
  );
};