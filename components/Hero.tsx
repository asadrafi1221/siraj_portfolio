/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  CircleDashed,
  Database,
  Terminal,
  FileText,
  BarChart3,
  CheckCircle2,
  Cpu,
  MoreHorizontal,
  Share2,
  Bot,
  Play,
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
  const containerRef = useRef<HTMLDivElement>(null);

  // Unified 3D Tilt Effect for the Main Dashboard Model
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 40; // Reduced sensitivity for the larger model
      const y = (e.clientY - innerHeight / 2) / 40;

      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-24 pb-12 overflow-hidden bg-[#020410] text-[#ffffff] font-['Inter',_sans-serif]">
      {/* CSS Keyframes Injection */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes typing {
          0% { width: 0 }
          100% { width: 100% }
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
      `,
        }}
      />

      {/* Dynamic Background Gradient */}
      <div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-[#6366f1] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{
          animation: "pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      ></div>

      {/* --- Text Content Section --- */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 mb-16">
        <div
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm opacity-0 mb-8"
          style={{
            animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
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
          className="text-5xl md:text-7xl lg:text-8xl font-['Newsreader',_serif] font-medium tracking-tight leading-[0.95] text-white opacity-0 mb-8"
          style={{
            animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            animationDelay: "0.1s",
          }}
        >
          Data <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
            Alchemy
          </span>
        </h1>

        <p
          className="text-lg text-[#94a3b8] max-w-2xl mx-auto font-light leading-relaxed opacity-0 mb-10"
          style={{
            animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            animationDelay: "0.2s",
          }}
        >
          Architecting high-frequency predictive models, autonomous cleaning
          pipelines, and publication-ready intelligence for the quantum age.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center gap-6 justify-center opacity-0"
          style={{
            animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            animationDelay: "0.3s",
          }}
        >
          <button
            onClick={() => onNavigate(PageRoute.CONTACT)}
            className="group h-12 px-8 bg-[#ffffff] text-[#020410] rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_50px_-10px_rgba(99,102,241,0.5)]"
          >
            Initialize Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => onNavigate(PageRoute.PORTFOLIO)}
            className="h-12 px-8 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-all flex items-center gap-3 backdrop-blur-md"
          >
            <CircleDashed
              className="w-4 h-4 text-[#6366f1]"
              style={{ animation: "spin-slow 20s linear infinite" }}
            />
            View Case Studies
          </button>
        </div>
      </div>

      {/* --- The "All-In-One" 3D Model Interface --- */}
      <div
        className="relative z-10 w-full max-w-[1200px] px-4 md:px-8 perspective-[2000px] opacity-0"
        style={{
          animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          animationDelay: "0.5s",
        }}
      >
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/10] md:aspect-[2/1] transition-transform duration-100 ease-out transform-style-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main Glass Panel (The "Screen") */}
          <div className="absolute inset-0 bg-[#060918]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            {/* 1. Interface Header (Core Software) */}
            <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-white/5">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
                <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono',_monospace] text-white/50">
                  <Bot className="w-3 h-3 text-[#6366f1]" />
                  <span>Analysis_Engine_v4.0</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["R", "Py", "St", "Sp"].map((tag, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#1e293b] border border-[#020410] flex items-center justify-center text-[10px] font-bold text-white/80 z-10"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <button className="px-3 py-1.5 rounded-md bg-[#6366f1] text-white text-xs font-medium shadow-[0_0_15px_-3px_#6366f1]">
                  Run Model
                </button>
              </div>
            </div>

            {/* 2. Main Workspace Body */}
            <div className="flex-1 flex overflow-hidden">
              {/* Left Panel: Data Cleaning & Prep (Code View) */}
              <div className="w-[40%] border-r border-white/10 p-6 flex flex-col font-['JetBrains_Mono',_monospace] text-xs">
                <div className="text-[#94a3b8] mb-4 flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  <span>Console Output / Data Cleaning</span>
                </div>
                <div className="space-y-3 opacity-80">
                  <div className="flex gap-3">
                    <span className="text-green-500">➜</span>
                    <span className="text-blue-400">import</span>
                    <span className="text-white">pandas, numpy, scipy</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-500">➜</span>
                    <span className="text-yellow-400">df.clean()</span>
                    <span className="text-white/50">
                      # Handling missing values (KNN Imputation)
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-500">➜</span>
                    <span className="text-white">Merging Panel Data...</span>
                    <span className="text-[#22c55e]">Done (0.4s)</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-500">➜</span>
                    <span className="text-purple-400">model.fit(X, y)</span>
                    <span className="text-white/50">
                      # Running Fixed Effects Model
                    </span>
                  </div>

                  {/* Simulated Output Box */}
                  <div className="mt-4 p-3 rounded bg-black/40 border border-white/5 text-white/70">
                    <div>
                      Variable Transformation:{" "}
                      <span className="text-[#22c55e]">Complete</span>
                    </div>
                    <div>
                      Outliers Removed:{" "}
                      <span className="text-[#22c55e]">142</span>
                    </div>
                    <div>
                      R-Squared Adjusted:{" "}
                      <span className="text-[#6366f1]">0.894</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Visualization & Reporting */}
              <div className="flex-1 p-6 relative bg-gradient-to-br from-transparent to-[#6366f1]/5">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-white/80">
                    <BarChart3 className="w-4 h-4 text-[#6366f1]" />
                    <span className="font-['Newsreader',_serif] italic text-lg">
                      Predictive Trends
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/50">
                      PDF
                    </div>
                    <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/50">
                      LaTeX
                    </div>
                  </div>
                </div>

                {/* The Chart Graphic */}
                <div className="relative w-full h-48 mt-4">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="w-full h-[1px] bg-white/5"></div>
                    ))}
                  </div>

                  {/* SVG Chart Line */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <path
                      d="M0,150 C100,140 200,160 300,100 C400,40 500,80 600,20"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="3"
                      className="drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                      style={{
                        strokeDasharray: 1000,
                        animation: "dash 3s ease-out forwards",
                      }}
                    />
                    {/* Area under curve */}
                    <path
                      d="M0,150 C100,140 200,160 300,100 C400,40 500,80 600,20 L600,200 L0,200 Z"
                      fill="url(#gradient)"
                      className="opacity-20"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Data Points */}
                  <div className="absolute top-[20px] right-0 p-2 rounded-lg bg-[#020410] border border-[#6366f1]/30 shadow-xl backdrop-blur-md translate-x-1/4 -translate-y-1/2">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                      <span className="text-xs font-bold text-white">
                        Projected Impact
                      </span>
                    </div>
                    <div className="text-lg font-['JetBrains_Mono',_monospace] text-[#6366f1]">
                      +42.8%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Floating "Report Ready" Widget (Documentation) */}
          <div
            className="absolute bottom-8 right-8 w-64 p-4 rounded-xl bg-[#0f172a] border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col gap-3"
            style={{
              transform: "translateZ(60px)",
              animation: "float 6s ease-in-out infinite",
              animationDelay: "1s",
            }}
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#eab308]" />
                <span className="text-xs font-semibold text-white">
                  Report.pdf
                </span>
              </div>
              <CheckCircle2 className="w-3 h-3 text-[#22c55e]" />
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[80%] bg-[#eab308]"></div>
              </div>
              <div className="flex justify-between text-[10px] text-[#94a3b8]">
                <span>Generating Tables...</span>
                <span>80%</span>
              </div>
            </div>
          </div>

          {/* 4. Floating "Active Database" Widget (Data) */}
          <div
            className="absolute -top-6 -left-6 p-4 rounded-2xl bg-[#0f172a]/90 border border-white/10 shadow-2xl backdrop-blur-xl"
            style={{
              transform: "translateZ(40px)",
              animation: "float 7s ease-in-out infinite",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#6366f1]/20 flex items-center justify-center">
                <Database className="w-5 h-5 text-[#6366f1]" />
              </div>
              <div>
                <div className="text-xs text-[#94a3b8] uppercase tracking-wider">
                  Rows Processed
                </div>
                <div className="text-white font-['JetBrains_Mono',_monospace]">
                  2,405,102
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
