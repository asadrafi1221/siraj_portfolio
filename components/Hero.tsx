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
  BookMarked,
  Activity,
  Play,
  Users,
  GraduationCap,
  Building2,
  Globe2,
} from "lucide-react";

// Mocking the PageRoute enum since it's an external type
enum PageRoute {
  CONTACT = "contact",
  PORTFOLIO = "portfolio",
}

interface HeroProps {
  onNavigate: (page: any) => void;
}

// --- Data Configuration ---
const tabs = [
  {
    id: "analysis",
    label: "Analysis",
    icon: <Cpu className="w-4 h-4" />,
    color: "#6366f1", // Indigo
    title: "Statistical & Econometric Software",
    subtitle: "Hypothesis testing & advanced regression modeling.",
    content: [
      {
        tool: "SPSS",
        desc: "ANOVA, Factor Analysis, Survey Data, Reliability Testing",
        tag: "Social Sci",
      },
      {
        tool: "STATA",
        desc: "Panel Data, DiD, IV Models, Fixed/Random Effects",
        tag: "Econometrics",
      },
      {
        tool: "R / RStudio",
        desc: "Reproducible Research, Custom Pipelines, Advanced Modeling",
        tag: "Computing",
      },
      {
        tool: "Python",
        desc: "Pandas, SciPy, Statsmodels, Automation workflows",
        tag: "Data Sci",
      },
    ],
  },
  {
    id: "cleaning",
    label: "Data Prep",
    icon: <Database className="w-4 h-4" />,
    color: "#22c55e", // Green
    title: "Data Cleaning & Preparation",
    subtitle: "Structuring raw inputs into analysis-ready datasets.",
    content: [
      {
        tool: "Excel",
        desc: "Cleaning, Restructuring, Summaries, Dashboards",
        tag: "Prep",
      },
      {
        tool: "Google Sheets",
        desc: "Collaborative data handling & preliminary analysis",
        tag: "Collab",
      },
      {
        tool: "Longitudinal",
        desc: "Panel structuring via Stata/R, Merging datasets",
        tag: "Structure",
      },
      {
        tool: "Treatment",
        desc: "Missing data imputation, Variable transformation",
        tag: "Quality",
      },
    ],
  },
  {
    id: "viz",
    label: "Visuals",
    icon: <BarChart3 className="w-4 h-4" />,
    color: "#a855f7", // Purple
    title: "Visualization & Reporting",
    subtitle: "Translating metrics into clear, actionable intelligence.",
    content: [
      {
        tool: "Code-Based",
        desc: "ggplot2 (R), Matplotlib/Seaborn (Python)",
        tag: "High-Fi",
      },
      {
        tool: "Dashboards",
        desc: "Excel Dashboards, Power BI / Tableau (on request)",
        tag: "Interactive",
      },
      {
        tool: "Reporting",
        desc: "Clean, labeled visuals suitable for publication",
        tag: "Standards",
      },
    ],
  },
  {
    id: "docs",
    label: "Docs",
    icon: <FileText className="w-4 h-4" />,
    color: "#eab308", // Amber
    title: "Research & Documentation",
    subtitle: "Ensuring outputs meet academic and professional standards.",
    content: [
      {
        tool: "Word",
        desc: "Research papers, Theses, Reports",
        tag: "Drafting",
      },
      {
        tool: "LaTeX",
        desc: "Journal-ready tables & academic formatting",
        tag: "Typeset",
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

  // 3D Tilt Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      // Low sensitivity for a stable, professional feel
      const x = (e.clientX - innerWidth / 2) / 60;
      const y = (e.clientY - innerHeight / 2) / 60;
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-28 pb-20 overflow-hidden bg-[#020410] text-[#ffffff] font-sans selection:bg-[#6366f1]/30">
      {/* 1. Font Imports & CSS Keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,wght@0,400;0,500;1,400;1,500&display=swap');
        
        .font-serif-custom { font-family: 'Newsreader', serif; }
        .font-mono-custom { font-family: 'JetBrains Mono', monospace; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateZ(40px); }
          50% { transform: translateY(-10px) translateZ(40px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />

      {/* Dynamic Background Glow */}
      <div
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#6366f1] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{
          animation: "pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      ></div>

      {/* --- 2. Main Text Content --- */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 mb-20">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-[slideUp_1s_ease-out]">
          <Activity className="w-3.5 h-3.5 text-[#22c55e]" />
          <span className="text-[10px] font-mono-custom font-medium tracking-[0.2em] text-white/80 uppercase">
            Consulting Operational
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif-custom font-medium italic tracking-tight text-white mb-6 animate-[slideUp_1s_ease-out_0.1s_both] leading-[1.1]">
          Have data but <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] via-white to-[#818cf8]">
            no clarity?
          </span>
        </h1>

        {/* Subtext Paragraph */}
        <p className="text-base md:text-lg text-[#94a3b8] font-light leading-relaxed max-w-3xl mx-auto mb-8 animate-[slideUp_1s_ease-out_0.2s_both]">
          I help you turn numbers into insights you can confidently act on.
          Providing professional data analysis and statistical consulting to
          researchers, students, and businesses needing accurate, reliable, and
          <span className="text-white font-medium">
            {" "}
            publication-ready results.
          </span>
        </p>

        {/* Audience Pills (Formatted "Who This Is For" list) */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 max-w-4xl mx-auto animate-[slideUp_1s_ease-out_0.3s_both]">
          {[
            { icon: GraduationCap, text: "Students & Researchers" },
            { icon: Users, text: "Academics & Faculty" },
            { icon: Building2, text: "Businesses & Startups" },
            { icon: Globe2, text: "NGOs & Think Tanks" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white/[0.03] border border-white/10 text-xs md:text-sm text-[#cbd5e1]"
            >
              <item.icon className="w-3.5 h-3.5 text-[#6366f1]" />
              {item.text}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center animate-[slideUp_1s_ease-out_0.4s_both]">
          <button
            onClick={() => onNavigate(PageRoute.CONTACT)}
            className="group h-12 px-8 bg-white text-[#020410] rounded-full font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]"
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

      {/* --- 3. The "IDE" Workstation (3D Model) --- */}
      <div className="relative z-10 w-full max-w-[1000px] px-4 perspective-[2000px]">
        <div
          ref={containerRef}
          className="relative w-full bg-[#060918]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-transform duration-100 ease-out transform-style-3d min-h-[500px] flex flex-col md:flex-row group"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glass Reflection Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none z-20"></div>

          {/* Sidebar (Tabs) */}
          <div className="w-full md:w-20 bg-[#020410]/50 border-b md:border-b-0 md:border-r border-white/10 flex md:flex-col items-center py-4 gap-4 z-20 px-4 md:px-0 overflow-x-auto md:overflow-visible">
            {/* Fake Mac Buttons */}
            <div className="hidden md:flex flex-col gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>

            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative group/btn p-3 rounded-xl transition-all duration-300 shrink-0 ${
                  activeTab === tab.id
                    ? "bg-white/10 text-white"
                    : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.icon}
                {activeTab === tab.id && (
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-current rounded-r-full -ml-4 hidden md:block"
                    style={{ color: tab.color }}
                  ></div>
                )}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col relative bg-gradient-to-br from-transparent to-white/[0.02]">
            {/* Breadcrumb Bar */}
            <div className="h-10 border-b border-white/10 flex items-center justify-between px-6 bg-white/[0.02]">
              <div className="flex items-center gap-2 text-[10px] font-mono-custom text-white/40">
                <span>workspace</span>
                <span>/</span>
                <span style={{ color: currentTab.color }}>{currentTab.id}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></div>
                <span className="text-[10px] text-white/50 font-mono-custom">
                  Active
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto">
              <div key={activeTab} className="animate-[slideUp_0.4s_ease-out]">
                <h2 className="text-2xl md:text-3xl font-serif-custom italic text-white mb-2">
                  {currentTab.title}
                </h2>
                <p className="text-[#94a3b8] text-sm max-w-lg mb-8">
                  {currentTab.subtitle}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentTab.content.map((item, idx) => (
                    <div
                      key={item.tool}
                      className="group/card p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 animate-[slideUp_0.4s_ease-out]"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <div className="flex justify-between items-start mb-1.5">
                        <span className="text-sm font-semibold text-white group-hover/card:text-[#6366f1] transition-colors">
                          {item.tool}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/50 font-mono-custom border border-white/5">
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
            </div>
          </div>
        </div>

        {/* --- Floating Parallax Widgets (Desktop Only) --- */}

        {/* Console Widget */}
        <div
          className="absolute -top-4 -right-2 md:right-8 md:-top-8 p-3 w-40 rounded-xl bg-[#0f172a] border border-white/10 shadow-2xl z-30 hidden md:block"
          style={{
            transform: "translateZ(50px)",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-1.5">
            <Terminal className="w-3 h-3 text-[#6366f1]" />
            <span className="text-[9px] font-bold text-white uppercase tracking-wider font-mono-custom">
              Console
            </span>
          </div>
          <div className="space-y-0.5 font-mono-custom text-[9px]">
            <div className="flex justify-between">
              <span className="text-blue-400">Analysis:</span>
              <span className="text-[#22c55e]">Complete</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-400">p-value:</span>
              <span className="text-white">&lt; 0.001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-400">Export:</span>
              <span className="text-white/50">Ready</span>
            </div>
          </div>
        </div>

        {/* Paper Export Widget */}
        <div
          className="absolute -bottom-6 -left-2 md:left-0 md:-bottom-8 p-3 rounded-xl bg-[#0f172a] border border-white/10 shadow-2xl z-30 flex items-center gap-3 hidden md:flex"
          style={{
            transform: "translateZ(60px)",
            animation: "float 7s ease-in-out infinite",
            animationDelay: "1s",
          }}
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
            <BookMarked className="w-4 h-4 text-[#eab308]" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-white font-mono-custom">
              Report_Final.pdf
            </div>
            <div className="text-[9px] text-[#94a3b8]">Ready to print</div>
          </div>
          <Play className="w-2.5 h-2.5 text-[#22c55e] fill-current" />
        </div>
      </div>
    </section>
  );
};
