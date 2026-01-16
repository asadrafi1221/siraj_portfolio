import React from "react";
import { Linkedin, Github, ArrowUp } from "lucide-react";
import { PageRoute } from "@/types";

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <span className="text-3xl font-serif italic text-foreground tracking-tight">
              Siraj.ai
            </span>
            <p className="text-muted-foreground max-w-xs leading-relaxed text-sm">
              Advanced analytics and econometric modeling for the digital age.
              Built for precision.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest mb-8">
              Sitemap
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li
                onClick={() => onNavigate(PageRoute.SERVICES)}
                className="hover:text-foreground cursor-pointer transition-colors"
              >
                Capabilities
              </li>
              <li
                onClick={() => onNavigate(PageRoute.PORTFOLIO)}
                className="hover:text-foreground cursor-pointer transition-colors"
              >
                Case Studies
              </li>
              <li
                onClick={() => onNavigate(PageRoute.UPWORK)}
                className="hover:text-foreground cursor-pointer transition-colors"
              >
                Upwork Profile
              </li>
              <li
                onClick={() => onNavigate(PageRoute.ABOUT)}
                className="hover:text-foreground cursor-pointer transition-colors"
              >
                Studio
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest mb-8">
              Legal
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <p>© 2024 SIRAJ ANALYTICS</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <p>DESIGNED IN CALIFORNIA</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              BACK TO TOP <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
