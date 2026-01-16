/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  CircleDashed,
  Database,
  Activity,
  Lock,
  Cpu,
} from "lucide-react";

// Mocking the PageRoute enum since it's an external type
enum PageRoute {
  CONTACT = "contact",
  PORTFOLIO = "portfolio",
}

interface HeroProps {
  onNavigate: (page: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 25;
      const y = (e.clientY - innerHeight / 2) / 25;

      cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#020410] text-[#ffffff] font-['Inter',_sans-serif]">
      {/* CSS Keyframes Injection */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) rotateX(0); }
          50% { transform: translateY(-10px) rotateX(2deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `,
        }}
      />

      {/* Dynamic Background Gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6366f1] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{
          animation: "pulseGlow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Column: Text */}
        <div className="text-center lg:text-left space-y-10 order-2 lg:order-1">
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm opacity-0"
            style={{
              animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              animationDelay: "0.1s",
            }}
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
            </div>
            <span className="text-[10px] font-['JetBrains_Mono',_monospace] font-medium tracking-[0.2em] text-white/80 uppercase">
              Systems Operational
            </span>
          </div>

          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-['Newsreader',_serif] font-medium tracking-tight leading-[0.9] text-white opacity-0"
            style={{
              animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              animationDelay: "0.2s",
            }}
          >
            Data <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
              Alchemy
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-[#94a3b8] max-w-xl mx-auto lg:mx-0 font-light leading-relaxed opacity-0"
            style={{
              animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              animationDelay: "0.3s",
            }}
          >
            Architecting high-frequency predictive models and autonomous
            financial intelligence for the quantum age.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start opacity-0"
            style={{
              animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              animationDelay: "0.4s",
            }}
          >
            <button
              onClick={() => onNavigate(PageRoute.CONTACT)}
              className="group h-14 px-8 bg-[#ffffff] text-[#020410] rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_50px_-10px_rgba(99,102,241,0.5)]"
            >
              Initialize
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate(PageRoute.PORTFOLIO)}
              className="h-14 px-8 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-all flex items-center gap-3 backdrop-blur-md"
            >
              <CircleDashed
                className="w-4 h-4 text-[#6366f1]"
                style={{ animation: "spin-slow 20s linear infinite" }}
              />
              Case Studies
            </button>
          </div>
        </div>

        {/* Right Column: 3D Visualization */}
        <div
          className="order-1 lg:order-2 flex items-center justify-center [perspective:1000px] opacity-0"
          style={{
            animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            animationDelay: "0.6s",
          }}
        >
          <div
            ref={cardRef}
            className="relative w-[340px] h-[460px] [transform-style:preserve-3d] transition-transform duration-100 ease-out"
          >
            {/* Layer 1: Base */}
            <div className="absolute inset-0 rounded-[2rem] shadow-2xl [transform:translateZ(0)] bg-[#060918] border border-white/5">
              <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent)] rounded-[2rem]"></div>
            </div>

            {/* Layer 2: Content Plate */}
            <div className="absolute inset-4 rounded-3xl p-6 flex flex-col justify-between [transform:translateZ(30px)] border border-white/10 bg-[#060918]/80 backdrop-blur-xl shadow-xl">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6366f1]/20 flex items-center justify-center text-[#6366f1]">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-['JetBrains_Mono',_monospace] text-[#94a3b8] uppercase">
                    Live Feed
                  </span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                  <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                </div>
              </div>

              <div className="flex-1 py-6 space-y-3">
                {[75, 45, 90, 60, 80].map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[10px] font-['JetBrains_Mono',_monospace] text-[#94a3b8] w-6">
                      0{i + 1}
                    </span>
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full"
                        style={{
                          width: `${h}%`,
                          animation: "pulseGlow 3s ease-in-out infinite",
                          animationDelay: `${i * 0.2}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <div className="text-[10px] text-[#94a3b8] uppercase tracking-wider mb-1">
                    Confidence
                  </div>
                  <div className="text-xl font-['Newsreader',_serif] italic text-white">
                    99.8%
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-[#94a3b8] uppercase tracking-wider mb-1">
                    Throughput
                  </div>
                  <div className="text-xl font-['Newsreader',_serif] italic text-white">
                    24ms
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3: Floating Widgets */}
            <div
              className="absolute -right-12 top-20 p-4 rounded-2xl shadow-2xl [transform:translateZ(60px)] backdrop-blur-md bg-black/50 border border-white/20"
              style={{ animation: "float 8s ease-in-out infinite" }}
            >
              <Activity className="w-6 h-6 text-[#4ade80]" />
            </div>

            <div
              className="absolute -left-8 bottom-32 p-4 rounded-2xl shadow-2xl [transform:translateZ(50px)] backdrop-blur-md bg-black/50 border border-white/20"
              style={{
                animation: "float 8s ease-in-out infinite",
                animationDelay: "2s",
              }}
            >
              <Lock className="w-6 h-6 text-[#60a5fa]" />
            </div>

            <div
              className="absolute -right-4 bottom-10 p-3 rounded-xl shadow-2xl [transform:translateZ(70px)] backdrop-blur-md bg-black/50 border border-white/20"
              style={{
                animation: "float 8s ease-in-out infinite",
                animationDelay: "1.5s",
              }}
            >
              <Cpu className="w-5 h-5 text-[#c084fc]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
