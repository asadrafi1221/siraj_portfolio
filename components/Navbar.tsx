/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Home, 
  Layers, 
  Info, 
  MessageSquare,
  Sparkles 
} from 'lucide-react';

// --- Styles ---
// Lyra-style primary button with deep shadow and press effect
const primaryBtnClasses = "inline-flex items-center justify-center gap-2 rounded-xl font-bold text-sm transition-all duration-300 ease-out active:scale-[0.96] outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 shadow-xl shadow-zinc-200/50 hover:bg-zinc-800 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 bg-zinc-900 text-white";

// Secondary button for secondary actions
const secondaryBtnClasses = "inline-flex items-center justify-center gap-2 rounded-xl font-bold text-sm transition-all duration-200 ease-out active:scale-[0.96] bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-300 shadow-sm";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const navItems = [
    { path: "/", name: "Home", icon: <Home size={18} /> },
    { path: "/services", name: "Services", icon: <Layers size={18} /> },
    { path: "/about", name: "About", icon: <Info size={18} /> },
  ];

  const isActive = (path: string) => 
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      <nav 
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled || isMobileOpen
            ? "bg-white/90 backdrop-blur-xl border-b border-zinc-200/80 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]" 
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* --- Brand Logo --- */}
          <button
            onClick={() => handleNavigate("/")}
            className="flex items-center gap-3 group outline-none"
          >
            <div className="flex gap-1 group-hover:gap-1.5 transition-all duration-500 ease-out items-end">
              <div className="w-1.5 h-6 bg-zinc-900 rounded-full group-hover:bg-indigo-600 transition-colors"></div>
              <div className="w-1.5 h-4 bg-zinc-400 rounded-full group-hover:bg-indigo-400 transition-colors"></div>
              <div className="w-1.5 h-7 bg-zinc-900 rounded-full group-hover:bg-emerald-500 transition-colors"></div>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-zinc-900">
              Stats<span className="text-zinc-400 font-medium">Analysis</span>
            </span>
          </button>

          {/* --- Desktop Nav (Floating Capsule) --- */}
          <div className="hidden md:flex items-center p-1 bg-zinc-100/60 rounded-full border border-zinc-200/60 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-out relative ${
                  isActive(item.path)
                    ? "text-zinc-900 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] ring-1 ring-black/5 scale-[1.02]" 
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* --- Desktop Actions --- */}
          <div className="hidden md:flex items-center gap-3">
          
            <button
              onClick={() => handleNavigate("/chat")}
              className={`${primaryBtnClasses} px-6 py-2.5`}
            >
              Start Project <ArrowRight size={16} />
            </button>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2.5 rounded-xl text-zinc-600 hover:bg-zinc-100 transition-all active:scale-95 border border-zinc-200 bg-white shadow-sm"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay (Premium Card Style) --- */}
      <div 
        className={`fixed inset-x-0 top-[70px] z-50 p-4 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          isMobileOpen 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-[2rem] border border-zinc-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] p-5 overflow-hidden">
          
          {/* Navigation Links Grid */}
          <div className="grid gap-2 mb-6">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-4 mb-2">Menu</span>
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-200 group ${
                  isActive(item.path)
                    ? "bg-zinc-900 text-white shadow-md"
                    : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-100"
                }`}
              >
                <span className={`p-2 rounded-lg ${isActive(item.path) ? "bg-white/20" : "bg-white border border-zinc-200 group-hover:border-zinc-300"}`}>
                   {item.icon}
                </span>
                {item.name}
                {isActive(item.path) && <Sparkles size={16} className="ml-auto text-emerald-400 animate-pulse" />}
              </button>
            ))}
          </div>

          {/* Call to Action Box */}
          

        </div>
      </div>

      {/* Backdrop for Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-zinc-900/20 backdrop-blur-[2px] z-40 md:hidden transition-opacity duration-500 ${
          isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />
    </>
  );
}

export default Navbar;