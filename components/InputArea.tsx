import React, { useRef, useEffect } from 'react';
import { Send, Sparkles, ArrowUp } from 'lucide-react';

interface InputAreaProps {
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
  onStop?: () => void;
}

export const InputArea: React.FC<InputAreaProps> = ({ input, setInput, onSend, isLoading }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-8">
      <div className="relative group transition-all duration-300">
        {/* Glow effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-zinc-200 to-zinc-300 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-focus-within:opacity-100 group-focus-within:duration-200 ${isLoading ? 'opacity-0' : ''}`}></div>
        
        <div className="relative bg-white rounded-3xl border border-zinc-200 shadow-sm focus-within:shadow-lg focus-within:border-zinc-300 transition-all duration-300 flex items-end overflow-hidden">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            className="w-full py-4 pl-6 pr-4 bg-transparent border-none outline-none resize-none text-zinc-900 placeholder-zinc-400 max-h-[200px] min-h-[56px] leading-relaxed"
            rows={1}
            disabled={isLoading}
          />
          <div className="pb-3 pr-3 pl-2">
            <button
              onClick={onSend}
              disabled={!input.trim() || isLoading}
              className={`btn-lyra-primary p-2.5 rounded-xl ${!input.trim() && !isLoading ? 'opacity-50 cursor-not-allowed bg-zinc-100 text-zinc-300 shadow-none hover:bg-zinc-100 hover:translate-y-0' : ''}`}
            >
              {isLoading ? (
                 <div className="w-5 h-5 border-2 border-zinc-300 border-t-white rounded-full animate-spin" />
              ) : (
                <ArrowUp size={20} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
        <Sparkles size={10} className="text-emerald-500" />
        <span>Run 1.0 AI Model</span>
      </div>
    </div>
  );
};