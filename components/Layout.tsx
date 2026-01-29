import React from "react";
import { View } from "../App";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  currentView,
  onNavigate,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black overflow-hidden relative transition-colors duration-300">
      {/* Global Ambient Background - Lyra Style */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-50/50 dark:bg-indigo-900/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-60"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-50/50 dark:bg-purple-900/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-60"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-200/60 dark:border-zinc-800/60 supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 group relative z-10 outline-none"
          >
            {/* Abstract Logo */}
            <div className="flex gap-0.5 group-hover:scale-105 transition-transform duration-500 ease-out">
              <div className="w-1.5 h-6 bg-zinc-900 dark:bg-white rounded-sm"></div>
              <div className="w-1.5 h-4 bg-zinc-400 dark:bg-zinc-600 self-end rounded-sm"></div>
              <div className="w-1.5 h-7 bg-zinc-900 dark:bg-white self-center rounded-sm"></div>
              <div className="w-1.5 h-5 bg-zinc-400 dark:bg-zinc-600 self-start rounded-sm"></div>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-zinc-900 dark:text-white">
              Stats
              <span className="text-zinc-400 dark:text-zinc-600 font-normal">
                Analysis
              </span>
            </span>
          </button>

          {/* Segmented Control Style Nav */}
          <div className="hidden md:flex items-center p-1.5 bg-zinc-100/80 dark:bg-zinc-900/80 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md shadow-inner">
            {["home", "services", "about"].map((v) => (
              <button
                key={v}
                onClick={() => onNavigate(v as View)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out capitalize ${
                  currentView === v
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-lyra-sm ring-1 ring-zinc-900/5 dark:ring-white/10"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <button onClick={toggleTheme} className="btn-lyra-icon">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="btn-lyra-primary text-sm px-6 py-2.5">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Scrollable Area */}
      <div className="flex-1 overflow-y-auto relative z-10 scroll-smooth dark:text-zinc-300">
        {children}

        {/* Footer */}
        <section className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-6 tracking-tight font-display text-zinc-900 dark:text-white">
                  Contact Us
                </h2>
                <div className="space-y-4 text-zinc-500 dark:text-zinc-400 text-sm">
                  <p className="max-w-md leading-relaxed">
                    Ready to start? Contact us for a free initial consultation.
                    We ensure your research is built on a solid statistical
                    foundation.
                  </p>
                  <div className="p-1 pr-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full w-fit flex items-center gap-3 pl-3 py-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="font-mono text-zinc-600 dark:text-zinc-300 font-medium">
                      analysis@example.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-12 text-sm text-zinc-500 dark:text-zinc-400">
                <div>
                  <strong className="text-zinc-900 dark:text-white block mb-6 font-display text-base">
                    Pages
                  </strong>
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={() => onNavigate("home")}
                        className="hover:text-black dark:hover:text-white hover:translate-x-1 transition-transform inline-block"
                      >
                        Home
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate("services")}
                        className="hover:text-black dark:hover:text-white hover:translate-x-1 transition-transform inline-block"
                      >
                        Services
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate("about")}
                        className="hover:text-black dark:hover:text-white hover:translate-x-1 transition-transform inline-block"
                      >
                        About
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <strong className="text-zinc-900 dark:text-white block mb-6 font-display text-base">
                    Legal
                  </strong>
                  <ul className="space-y-3">
                    <li className="hover:text-black dark:hover:text-white cursor-pointer hover:translate-x-1 transition-transform inline-block">
                      Privacy Policy
                    </li>
                    <li className="hover:text-black dark:hover:text-white cursor-pointer hover:translate-x-1 transition-transform inline-block">
                      Terms of Service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-400 dark:text-zinc-600 flex justify-between items-center font-medium">
              <span>© 2024 Statistical Analysis Services.</span>
              <span className="opacity-50">Lyra 2.0 Design System</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
