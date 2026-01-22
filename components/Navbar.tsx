import React, { useState, useEffect } from "react";
import { Menu, X, Command } from "lucide-react";
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
    <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none font-['Inter',_sans-serif]">
      <nav
        className={`pointer-events-auto transition-all duration-500 rounded-full border ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-neutral-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3 px-5"
            : "bg-transparent border-transparent py-4 px-6"
        }`}
      >
        <div className="flex items-center gap-8 md:gap-12">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer gap-3 group"
            onClick={() => onNavigate(PageRoute.HOME)}
          >
            <div className="w-8 h-8 rounded-full bg-[#171717] text-white flex items-center justify-center transition-transform group-hover:rotate-180 duration-700 shadow-md">
              <Command className="w-4 h-4" />
            </div>
            <span
              className={`text-sm font-bold tracking-tight text-[#171717] transition-all duration-500 ${
                scrolled
                  ? "w-0 opacity-0 overflow-hidden"
                  : "w-auto opacity-100"
              }`}
            >
              Analyze4Growth
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavigate(link.value)}
                className={`relative px-4 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-300 ${
                  currentPage === link.value
                    ? "text-[#171717] bg-neutral-100 font-semibold"
                    : "text-neutral-500 hover:text-[#171717] hover:bg-black/[0.03]"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pl-6 border-l border-neutral-200">
            <button
              onClick={() => onNavigate(PageRoute.CONTACT)}
              className="hidden md:flex items-center gap-2 bg-[#171717] text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-neutral-900/20"
            >
              Hire Me
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1 text-[#171717]"
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
        <div className="pointer-events-auto absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-2xl rounded-[2rem] p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] z-50 md:hidden animate-slide-up border border-white/50 ring-1 ring-black/5">
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
                    ? "bg-neutral-100 text-[#171717]"
                    : "text-neutral-500 hover:bg-neutral-50 hover:text-[#171717]"
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="h-px bg-neutral-100 my-4"></div>
            <button
              onClick={() => {
                onNavigate(PageRoute.CONTACT);
                setIsOpen(false);
              }}
              className="w-full bg-[#171717] text-white font-bold py-4 rounded-xl tracking-widest text-sm shadow-xl shadow-neutral-900/10"
            >
              START PROJECT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
