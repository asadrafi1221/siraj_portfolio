import React from 'react';
import { Section } from '@/components/Section';
import { Database, BarChart3, Calculator, BookOpen, PenTool, FileSpreadsheet, PieChart, Network, ArrowUpRight, Check, HelpCircle, ChevronDown, ChevronRight, Briefcase, Clock, Zap, Microscope, GraduationCap, Building2, Landmark } from 'lucide-react';
import { redirect } from "next/navigation"; // Using App Router redirection style

// --- Hardcoded Button Styles (Light Mode Only) ---
// btn-lyra-primary (Simplified): bg-zinc-900 text-white shadow-lyra hover:bg-black hover:shadow-lyra-lg hover:-translate-y-0.5
const primaryBtnClasses = "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none shadow-lyra hover:bg-black hover:shadow-lyra-lg hover:-translate-y-0.5 bg-zinc-900 text-white";


export const Footer = () => {

  const onNavigate = (route: string) => {
    // Use router.push if this were a Client Component, but since Footer is likely Server Component, redirect() is appropriate for full-page navigation on click.
    if(route === "home") redirect("/");
    redirect(route);
  }

  return (
     <section className="py-24 border-t border-zinc-200 bg-white backdrop-blur-sm"> {/* Removed dark: styles */}
          <div className="max-w-7xl mx-auto px-6"> {/* Changed max-w-7xl for consistency with other pages */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-6 tracking-tight font-display text-zinc-900"> {/* Removed dark:text-white */}
                  Contact Us
                </h2>
                <div className="space-y-4 text-zinc-500 text-sm"> {/* Removed dark:text-zinc-400 */}
                  <p className="max-w-md leading-relaxed">
                    Ready to start? Contact us for a free initial consultation.
                    We ensure your research is built on a solid statistical
                    foundation.
                  </p>
                  <div className="p-1 pr-4 bg-zinc-50 border border-zinc-200 rounded-full w-fit flex items-center gap-3 pl-3 py-2"> {/* Removed dark: styles */}
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="font-mono text-zinc-600 font-medium"> {/* Removed dark: styles */}
                      analysis@example.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-12 text-sm text-zinc-500"> {/* Removed dark: styles */}
                <div>
                  <strong className="text-zinc-900 block mb-6 font-display text-base"> {/* Removed dark:text-white */}
                    Pages
                  </strong>
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={() => onNavigate("home")}
                        className="hover:text-black hover:translate-x-1 transition-transform inline-block" // Removed dark:hover:text-white
                      >
                        Home
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate("services")}
                        className="hover:text-black hover:translate-x-1 transition-transform inline-block" // Removed dark:hover:text-white
                      >
                        Services
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate("about")}
                        className="hover:text-black hover:translate-x-1 transition-transform inline-block" // Removed dark:hover:text-white
                      >
                        About
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <strong className="text-zinc-900 block mb-6 font-display text-base"> {/* Removed dark:text-white */}
                    Legal
                  </strong>
                  <ul className="space-y-3">
                    <li className="hover:text-black cursor-pointer hover:translate-x-1 transition-transform inline-block"> {/* Removed dark: styles */}
                      Privacy Policy
                    </li>
                    <li className="hover:text-black cursor-pointer hover:translate-x-1 transition-transform inline-block"> {/* Removed dark: styles */}
                      Terms of Service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-zinc-200 text-xs text-zinc-400 flex justify-between items-center font-medium"> {/* Removed dark: styles */}
              <span>© 2024 Statistical Analysis Services.</span>
              <span className="opacity-50">Lyra 2.0 Design System</span>
            </div>
          </div>
        </section>
  );
};