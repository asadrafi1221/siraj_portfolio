import React from 'react';
import { ModelId } from '../types';
import { MessageSquarePlus, Settings2, PanelLeftClose, ChevronDown, CheckCircle2 } from 'lucide-react';
import { MODELS } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  currentModel: ModelId;
  setModel: (id: ModelId) => void;
  onNewChat: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  toggleSidebar, 
  currentModel, 
  setModel, 
  onNewChat 
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/10 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={toggleSidebar}
      />

      {/* Sidebar Container */}
      <div className={`fixed lg:relative z-40 flex flex-col h-full bg-zinc-50/90 backdrop-blur-2xl border-r border-zinc-200/60 w-[320px] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:w-0 lg:-translate-x-0 lg:overflow-hidden border-none'
      }`}>
        
        {/* Header */}
        <div className="px-6 h-20 flex items-center justify-between border-b border-transparent">
          <div className="flex items-center gap-3 font-bold text-zinc-900 font-display tracking-tight text-xl">
            <div className="flex gap-0.5 scale-90 origin-left">
               <div className="w-1 h-5 bg-black rounded-sm"></div>
               <div className="w-1 h-3 bg-zinc-500 self-end rounded-sm"></div>
               <div className="w-1 h-6 bg-black self-center rounded-sm"></div>
            </div>
            <span>Run 1.0</span>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden btn-lyra-icon">
            <PanelLeftClose size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-8 scroll-smooth">
          
          {/* Primary Action */}
          <button 
            onClick={() => {
              onNewChat();
              if (window.innerWidth < 1024) toggleSidebar();
            }}
            className="btn-lyra-primary w-full py-3.5 rounded-2xl group"
          >
            <MessageSquarePlus size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
            <span className="font-bold text-sm tracking-wide">New Chat</span>
          </button>

          {/* Model Selection */}
          <div className="space-y-3">
            <div className="px-1 flex items-center justify-between mb-2">
               <h3 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Model Config</h3>
               <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-mono font-bold">LIVE</span>
            </div>
            <div className="grid gap-3">
              {MODELS.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setModel(model.id)}
                  className={`relative w-full flex items-start gap-4 px-4 py-4 rounded-2xl text-sm transition-all text-left border group ${
                    currentModel === model.id 
                      ? 'bg-white text-zinc-900 shadow-lyra border-zinc-200 ring-1 ring-zinc-900/5' 
                      : 'bg-zinc-100/50 border-transparent text-zinc-500 hover:bg-white hover:border-zinc-200/50 hover:text-zinc-900 hover:shadow-sm'
                  }`}
                >
                  <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${currentModel === model.id ? 'border-zinc-900' : 'border-zinc-300 group-hover:border-zinc-400'}`}>
                    {currentModel === model.id && <div className="w-2.5 h-2.5 rounded-full bg-zinc-900" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div className="font-bold leading-none mb-1.5 font-display text-base">{model.name}</div>
                        {currentModel === model.id && <CheckCircle2 size={14} className="text-emerald-500" />}
                    </div>
                    <div className="text-xs text-zinc-400 font-medium leading-relaxed">{model.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-zinc-200/60 bg-zinc-50/50">
          <button className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-md transition-all text-sm text-zinc-600 hover:text-zinc-900 group">
             <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-zinc-100 to-white border border-zinc-200 flex items-center justify-center text-zinc-500 group-hover:text-zinc-900 transition-colors">
                  <Settings2 size={18} />
                </div>
                <div className="flex flex-col items-start">
                   <span className="font-bold text-xs text-zinc-900">Settings</span>
                   <span className="text-[10px] text-zinc-400">Preferences & Account</span>
                </div>
             </div>
             <ChevronDown size={14} className="text-zinc-300 group-hover:text-zinc-500" />
          </button>
        </div>
      </div>
    </>
  );
};