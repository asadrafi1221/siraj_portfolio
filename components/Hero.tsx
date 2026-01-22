/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
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
    // Background is transparent to let Home component's spotlight shine through
    <section className="relative min-h-screen flex flex-col items-center pt-28 pb-20 overflow-visible bg-transparent text-[#171717] font-sans selection:bg-[#6366f1]/20">
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
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />

      {/* --- 2. Main Text Content --- */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 mb-20">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white shadow-sm mb-8 animate-[slideUp_1s_ease-out]">
          <Activity className="w-3.5 h-3.5 text-[#6366f1]" />
          <span className="text-[10px] font-mono-custom font-medium tracking-[0.2em] text-neutral-500 uppercase">
            Data / statistical analysis consultation
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl  md:text-6xl lg:text-7xl font-serif-custom font-medium italic tracking-tight text-[#171717] mb-6 animate-[slideUp_1s_ease-out_0.1s_both] leading-[1.1]">
          Have data but{" "}
          <span className="text-transparent bg-clip-text pr-3 bg-gradient-to-r from-[#6366f1] via-[#818cf8] to-[#6366f1]">
            no clarity?
          </span>
        </h1>

        {/* Subtext Paragraph */}
        <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-3xl mx-auto mb-8 animate-[slideUp_1s_ease-out_0.2s_both]">
          {`I help you turn numbers into insights you can confidently act on.
          Providing professional data analysis and statistical consulting to
          researchers, students, and businesses needing accurate, reliable, and`}
          <span className="text-[#171717] font-medium border-b border-[#6366f1]/20">
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
              className="flex items-center  gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white border border-neutral-200 text-xs md:text-sm text-neutral-600 shadow-sm hover:border-[#6366f1]/30 transition-colors"
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
            className="group h-12 px-8 bg-[#171717] text-white rounded-full font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl shadow-neutral-900/20"
          >
            Start Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => onNavigate(PageRoute.PORTFOLIO)}
            className="h-12 px-8 rounded-full border border-neutral-200 font-bold bg-white text-[#171717] hover:bg-neutral-50 transition-colors flex items-center gap-3 shadow-sm"
          >
            Case Studies
          </button>
        </div>
      </div>

      {/* --- 3. The "IDE" Workstation (3D Model) --- */}
      <div className="relative z-10 w-full max-w-[1000px] px-4 perspective-[2000px]">
        <div
          ref={containerRef}
          className="relative w-full bg-white/80 backdrop-blur-xl border border-white/60 ring-1 ring-black/5 rounded-2xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] overflow-hidden transition-transform duration-100 ease-out transform-style-3d min-h-[500px] flex flex-col md:flex-row group"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent pointer-events-none z-20"></div>

          {/* Sidebar (Tabs) */}
          <div className="w-full md:w-20 bg-neutral-50/80 border-b md:border-b-0 md:border-r border-neutral-200 flex md:flex-col items-center py-6 gap-4 z-20 px-4 md:px-0 overflow-x-auto md:overflow-visible">
            {/* Mac Buttons */}
            <div className="hidden md:flex flex-col gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] border border-[#e0443e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] border border-[#d89e24]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] border border-[#1aab29]"></div>
            </div>

            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative group/btn p-3 rounded-xl transition-all duration-300 shrink-0 ${
                  activeTab === tab.id
                    ? "bg-white text-[#171717] shadow-sm ring-1 ring-black/5"
                    : "text-neutral-400 hover:text-neutral-600 hover:bg-black/5"
                }`}
              >
                {tab.icon}
                {activeTab === tab.id && (
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-current rounded-r-full -ml-3 hidden md:block"
                    style={{ color: tab.color }}
                  ></div>
                )}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col relative bg-white/50">
            {/* Breadcrumb Bar */}
            <div className="h-10 border-b border-neutral-100 flex items-center justify-between px-6 bg-white/80">
              <div className="flex items-center gap-2 text-[10px] font-mono-custom text-neutral-400">
                <span>workspace</span>
                <span>/</span>
                <span style={{ color: currentTab.color }}>{currentTab.id}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></div>
                <span className="text-[10px] text-neutral-500 font-mono-custom">
                  Active
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-gradient-to-br from-white via-neutral-50/50 to-white">
              <div key={activeTab} className="animate-[slideUp_0.4s_ease-out]">
                <h2 className="text-2xl md:text-3xl font-serif-custom italic text-[#171717] mb-2">
                  {currentTab.title}
                </h2>
                <p className="text-neutral-500 text-sm max-w-lg mb-8">
                  {currentTab.subtitle}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentTab.content.map((item, idx) => (
                    <div
                      key={item.tool}
                      className="group/card p-4 rounded-xl bg-white border border-neutral-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-indigo-100 transition-all duration-300 animate-[slideUp_0.4s_ease-out]"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <div className="flex justify-between items-start mb-1.5">
                        <span className="text-sm font-semibold text-[#171717] group-hover/card:text-[#6366f1] transition-colors">
                          {item.tool}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-500 font-mono-custom border border-neutral-200 group-hover/card:bg-indigo-50 group-hover/card:text-indigo-600 transition-colors">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 leading-relaxed">
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
          className="absolute -top-4 -right-2 md:right-8 md:-top-8 p-4 w-48 rounded-xl bg-white border border-neutral-200 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] z-30 hidden md:block"
          style={{
            transform: "translateZ(50px)",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <div className="flex items-center gap-2 mb-3 border-b border-neutral-100 pb-2">
            <Terminal className="w-3 h-3 text-[#6366f1]" />
            <span className="text-[9px] font-bold text-[#171717] uppercase tracking-wider font-mono-custom">
              Console
            </span>
          </div>
          <div className="space-y-1 font-mono-custom text-[9px]">
            <div className="flex justify-between">
              <span className="text-blue-600">Analysis:</span>
              <span className="text-[#22c55e]">Complete</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-600">p-value:</span>
              <span className="text-[#171717]">&lt; 0.001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-600">Export:</span>
              <span className="text-neutral-400">Ready</span>
            </div>
          </div>
        </div>

        {/* Paper Export Widget */}
        <div
          className="absolute -bottom-6 -left-2 md:left-0 md:-bottom-8 p-3 rounded-xl bg-white border border-neutral-200 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] z-30 flex items-center gap-3 hidden md:flex"
          style={{
            transform: "translateZ(60px)",
            animation: "float 7s ease-in-out infinite",
            animationDelay: "1s",
          }}
        >
          <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center">
            <BookMarked className="w-5 h-5 text-[#eab308]" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-[#171717] font-mono-custom">
              Report_Final.pdf
            </div>
            <div className="text-[9px] text-neutral-400">Ready to print</div>
          </div>
          <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
            <Play className="w-2.5 h-2.5 text-[#22c55e] fill-current ml-0.5" />
          </div>
        </div>
      </div>
    </section>
  );
};
