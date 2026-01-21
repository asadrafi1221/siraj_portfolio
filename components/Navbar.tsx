import React, { useState, useEffect } from "react";
import { Menu, X, Command, ExternalLink } from "lucide-react";
import { PageRoute } from "@/types";

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Capabilities", value: PageRoute.SERVICES },
    { name: "Case Studies", value: PageRoute.PORTFOLIO },
    { name: "Studio", value: PageRoute.ABOUT },
    { name: "Upwork", value: PageRoute.UPWORK },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-500 rounded-full border ${
          scrolled
            ? " backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50 py-3 px-5"
            : "bg-transparent border-transparent py-4 px-6"
        }`}
      >
        <div className="flex items-center gap-8 md:gap-12">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer gap-3 group"
            onClick={() => onNavigate(PageRoute.HOME)}
          >
            <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center transition-transform group-hover:rotate-180 duration-700">
              <Command className="w-4 h-4" />
            </div>
            <span
              className={`text-sm font-semibold tracking-tight transition-all duration-500 ${
                scrolled
                  ? "w-0 opacity-0 overflow-hidden"
                  : "w-auto opacity-100"
              }`}
            >
              analyze4growth
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavigate(link.value)}
                className={`relative px-4 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-white/5 ${
                  currentPage === link.value
                    ? "text-foreground bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pl-6 border-l border-white/10">
            <button
              onClick={() => onNavigate(PageRoute.CONTACT)}
              className="hidden md:flex items-center gap-2 bg-foreground text-background px-5 py-2 rounded-full text-xs font-bold tracking-widest hover:scale-105 active:scale-95 transition-transform"
            >
              HIRE ME
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1 text-foreground"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="pointer-events-auto absolute top-24 left-4 right-4 glass-panel rounded-[2rem] p-6 shadow-2xl z-50 md:hidden animate-slide-up backdrop-blur-3xl border border-white/10">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  onNavigate(link.value);
                  setIsOpen(false);
                }}
                className={`p-4 text-left rounded-xl transition-colors font-medium text-lg ${
                  currentPage === link.value
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:bg-white/5"
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="h-px bg-white/10 my-4"></div>
            <button
              onClick={() => {
                onNavigate(PageRoute.CONTACT);
                setIsOpen(false);
              }}
              className="w-full bg-primary text-white font-bold py-4 rounded-xl tracking-widest text-sm"
            >
              START PROJECT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
