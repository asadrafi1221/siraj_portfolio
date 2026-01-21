/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CircleDashed,
  Database,
  Terminal,
  FileText,
  BarChart3,
  Cpu,
  Layers,
  Code2,
  Table,
  BookMarked,
  Activity,
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

// --- Data Configuration (Your Content) ---
const tabs = [
  {
    id: "analysis",
    label: "Core Analysis",
    icon: <Cpu className="w-4 h-4" />,
    color: "#6366f1", // Indigo
    title: "Statistical & Econometric Modeling",
    subtitle: "Hypothesis testing, regression engines, and advanced modeling.",
    content: [
      {
        tool: "SPSS",
        desc: "ANOVA, Factor Analysis, Survey Data, Reliability Testing",
        tag: "Social Sciences",
      },
      {
        tool: "STATA",
        desc: "Panel Data, DiD, IV Models, Fixed/Random Effects",
        tag: "Econometrics",
      },
      {
        tool: "R / RStudio",
        desc: "Reproducible Research, Custom Pipelines, Advanced Modeling",
        tag: "Statistical Computing",
      },
      {
        tool: "Python",
        desc: "Pandas, SciPy, Automation, Complex Datasets",
        tag: "Data Science",
      },
    ],
  },
  {
    id: "cleaning",
    label: "Data Prep",
    icon: <Database className="w-4 h-4" />,
    color: "#22c55e", // Green
    title: "Data Cleaning & Management",
    subtitle: "Structuring raw inputs into analysis-ready datasets.",
    content: [
      {
        tool: "Excel & Sheets",
        desc: "Restructuring, Validation, Collaborative Handling",
        tag: "Preprocessing",
      },
      {
        tool: "Longitudinal",
        desc: "Panel structuring via Stata/R, Merging datasets",
        tag: "Structuring",
      },
      {
        tool: "Treatment",
        desc: "Missing data imputation, Outlier detection, Transformation",
        tag: "Quality Control",
      },
    ],
  },
  {
    id: "viz",
    label: "Visualization",
    icon: <BarChart3 className="w-4 h-4" />,
    color: "#a855f7", // Purple
    title: "Visualization & Reporting",
    subtitle: "Translating metrics into clear, actionable intelligence.",
    content: [
      {
        tool: "Code-Based",
        desc: "ggplot2 (R), Matplotlib/Seaborn (Python)",
        tag: "High-Fidelity",
      },
      {
        tool: "Dashboards",
        desc: "Excel Dashboards, Power BI / Tableau (on request)",
        tag: "Interactive",
      },
      {
        tool: "Standards",
        desc: "Clean, labeled visuals suitable for publication",
        tag: "Reporting",
      },
    ],
  },
  {
    id: "docs",
    label: "Documentation",
    icon: <FileText className="w-4 h-4" />,
    color: "#eab308", // Amber
    title: "Research & Publication",
    subtitle: "Ensuring outputs meet academic and professional standards.",
    content: [
      {
        tool: "Microsoft Word",
        desc: "Research papers, Theses, Professional Reports",
        tag: "Drafting",
      },
      {
        tool: "LaTeX",
        desc: "Journal-ready tables, Academic formatting",
        tag: "Typesetting",
      },
      {
        tool: "References",
        desc: "EndNote & Zotero aligned tables",
        tag: "Citations",
      },
    ],
  },
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("analysis");
  const [isHovering, setIsHovering] = useState(false);

  // 3D Tilt Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      // Reduced sensitivity for a more stable "workstation" feel
      const x = (e.clientX - innerWidth / 2) / 45;
      const y = (e.clientY - innerHeight / 2) / 45;

      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-28 pb-20 overflow-hidden bg-[#020410] text-[#ffffff] font-['Inter',_sans-serif]">
      {/* CSS Injection */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) translateZ(40px); }
          50% { transform: translateY(-10px) translateZ(40px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `,
        }}
      />

      {/* Dynamic Background */}
      <div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1400px] h-[700px] bg-[#6366f1] rounded-full blur-[180px] opacity-15 pointer-events-none"
        style={{
          animation: "pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      ></div>

      {/* --- Intro Text --- */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 mb-16">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-[slideUp_1s_ease-out]">
          <Activity className="w-4 h-4 text-[#22c55e]" />
          <span className="text-[10px] font-['JetBrains_Mono',_monospace] font-medium tracking-[0.2em] text-white/80 uppercase">
            System Online
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Newsreader',_serif] font-medium tracking-tight leading-[0.95] text-white mb-8 animate-[slideUp_1s_ease-out_0.1s_both]">
          Data <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
            Orchestration
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center animate-[slideUp_1s_ease-out_0.3s_both]">
          <button
            onClick={() => onNavigate(PageRoute.CONTACT)}
            className="group h-12 px-8 bg-white text-[#020410] rounded-full font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
          >
            Start Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => onNavigate(PageRoute.PORTFOLIO)}
            className="h-12 px-8 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium backdrop-blur-md flex items-center gap-3"
          >
            <CircleDashed className="w-4 h-4 animate-spin-slow text-[#6366f1]" />
            Case Studies
          </button>
        </div>
      </div>

      {/* --- The "IDE" Interface (3D Model) --- */}
      <div className="relative z-10 w-full max-w-[1100px] px-4 perspective-[2500px]">
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative w-full bg-[#060918]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-transform duration-100 ease-out transform-style-3d min-h-[500px] flex flex-col md:flex-row"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* 1. Sidebar (Navigation) */}
          <div className="w-full md:w-20 bg-[#020410]/50 border-b md:border-b-0 md:border-r border-white/10 flex md:flex-col items-center py-4 gap-6 z-20 overflow-x-auto md:overflow-visible px-4 md:px-0">
            {/* Window Controls (Fake) */}
            <div className="hidden md:flex flex-col gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>

            {/* Icons */}
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative group p-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white/10 text-white shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]"
                    : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.icon}
                {/* Tooltip */}
                <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#1e293b] text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none z-50 hidden md:block">
                  {tab.label}
                </span>
                {/* Active Indicator Line */}
                {activeTab === tab.id && (
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-current rounded-r-full -ml-4 hidden md:block"
                    style={{ color: tab.color }}
                  ></div>
                )}
              </button>
            ))}
          </div>

          {/* 2. Main Content Area */}
          <div className="flex-1 flex flex-col relative bg-gradient-to-br from-transparent to-white/[0.02]">
            {/* Top Bar (Breadcrumbs) */}
            <div className="h-12 border-b border-white/10 flex items-center justify-between px-6 bg-white/[0.02]">
              <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono',_monospace] text-white/40">
                <span>project_root</span>
                <span>/</span>
                <span style={{ color: currentTab.color }}>{currentTab.id}</span>
                <span>/</span>
                <span className="text-white/80">main.py</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 rounded bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-[10px] flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></div>
                  Running
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 p-8 overflow-y-auto">
              {/* Header */}
              <div
                key={activeTab + "-header"}
                className="mb-8 animate-[slideUp_0.4s_ease-out]"
              >
                <h2 className="text-3xl font-['Newsreader',_serif] italic text-white mb-2">
                  {currentTab.title}
                </h2>
                <p className="text-[#94a3b8] text-sm max-w-lg">
                  {currentTab.subtitle}
                </p>
              </div>

              {/* Dynamic Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentTab.content.map((item, idx) => (
                  <div
                    key={item.tool}
                    className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 animate-[slideUp_0.4s_ease-out]"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-sm font-semibold text-white group-hover:text-[#6366f1] transition-colors">
                        {item.tool}
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40 font-['JetBrains_Mono',_monospace]">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Background Decoration Inside Window */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-white/5 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* --- Floating Widgets (Parallax) --- */}

        {/* Widget 1: Processing Stats */}
        <div
          className="absolute -top-6 -right-6 md:right-10 p-4 w-48 rounded-xl bg-[#0f172a]/90 border border-white/10 shadow-2xl backdrop-blur-xl z-30 hidden md:block"
          style={{
            transform: "translateZ(50px)",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <div className="flex items-center gap-3 mb-3 border-b border-white/5 pb-2">
            <Terminal className="w-4 h-4 text-[#6366f1]" />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">
              Console
            </span>
          </div>
          <div className="space-y-1 font-['JetBrains_Mono',_monospace] text-[10px]">
            <div className="flex justify-between">
              <span className="text-[#94a3b8]">Regress:</span>
              <span className="text-[#22c55e]">Done</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#94a3b8]">p-value:</span>
              <span className="text-[#eab308]">&lt; 0.05</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#94a3b8]">R-Sq:</span>
              <span className="text-white">0.942</span>
            </div>
          </div>
        </div>

        {/* Widget 2: Paper Export */}
        <div
          className="absolute -bottom-8 -left-4 md:left-0 p-4 rounded-xl bg-[#0f172a]/90 border border-white/10 shadow-2xl backdrop-blur-xl z-30 flex items-center gap-4 hidden md:flex"
          style={{
            transform: "translateZ(60px)",
            animation: "float 7s ease-in-out infinite",
            animationDelay: "1s",
          }}
        >
          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
            <BookMarked className="w-5 h-5 text-[#eab308]" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">
              Draft_vFinal.tex
            </div>
            <div className="text-[10px] text-[#94a3b8]">
              Compiling Tables...
            </div>
          </div>
          <div className="h-8 w-[1px] bg-white/10"></div>
          <Play className="w-3 h-3 text-[#22c55e] fill-current" />
        </div>
      </div>
    </section>
  );
};
