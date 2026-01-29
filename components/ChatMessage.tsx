import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Message } from '../types';
import { Bot, User, Copy, Check, Sparkles } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-8 group`}>
      <div className={`flex max-w-3xl w-full gap-5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center shadow-sm ${
          isUser 
            ? 'bg-zinc-900 text-white' 
            : 'bg-white text-zinc-900 border border-zinc-200/80 bg-gradient-to-b from-white to-zinc-50'
        }`}>
          {isUser ? <User size={14} strokeWidth={2.5} /> : <Sparkles size={14} strokeWidth={2.5} className="text-indigo-500" />}
        </div>

        {/* Content Bubble */}
        <div className={`relative flex-1 min-w-0 ${
          isUser 
            ? 'bg-zinc-100/80 backdrop-blur-sm text-zinc-900 rounded-2xl rounded-tr-sm px-6 py-4' 
            : 'bg-transparent text-zinc-800 px-0 py-1'
        }`}>
          
          {/* Message Text */}
          <div className={`prose prose-zinc prose-sm max-w-none leading-7 ${isUser ? '' : 'prose-headings:font-display prose-headings:font-bold'}`}>
            {isUser ? (
              <p className="whitespace-pre-wrap font-medium text-sm">{message.text}</p>
            ) : (
              <ReactMarkdown 
                components={{
                  code: ({ node, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                      <div className="relative my-6 rounded-xl overflow-hidden bg-zinc-50 border border-zinc-200/60 shadow-sm">
                        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100/50 border-b border-zinc-200/50 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                          <span>{match[1]}</span>
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm text-zinc-800 font-mono leading-relaxed bg-white">
                          <code className={className} {...props}>
                            {children}
                          </code>
                        </pre>
                      </div>
                    ) : (
                      <code className="px-1.5 py-0.5 rounded-md bg-zinc-100 text-zinc-700 font-mono text-xs border border-zinc-200/60 font-medium" {...props}>
                        {children}
                      </code>
                    )
                  },
                  p: ({children}) => <p className="mb-4 last:mb-0">{children}</p>,
                  ul: ({children}) => <ul className="list-disc pl-4 mb-4 space-y-1">{children}</ul>,
                  ol: ({children}) => <ol className="list-decimal pl-4 mb-4 space-y-1">{children}</ol>
                }}
              >
                {message.text}
              </ReactMarkdown>
            )}
            {message.isStreaming && (
              <span className="inline-block w-1.5 h-4 align-middle ml-1 bg-zinc-900 animate-pulse rounded-full" />
            )}
          </div>

          {/* Actions (Copy) */}
          {!isUser && !message.isStreaming && (
            <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={handleCopy}
                className="btn-lyra-icon px-2 py-1 h-auto w-auto text-xs"
                title="Copy to clipboard"
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};