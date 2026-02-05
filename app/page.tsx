'use client'

import React, { useState, useMemo } from "react";
import {
  ArrowRight,
  Star,
  Quote,
  ChevronRight,
  TrendingUp,
  Users,
  FileCheck,
  Award,
  BarChart3,
  Database,
  BookOpen,
  PieChart,
  Activity,
  Layers,
  LayoutGrid,
  Check,
  XCircle,
  CheckCircle2,
  GraduationCap,
  Building2,
  FlaskConical,
  ShieldCheck,
  Clock,
  Cpu,
  FileText,
  Settings,
  Linkedin,
  ExternalLink,
  Trophy,
  Menu // Added for potential future nav expansion
} from "lucide-react";
// import { redirect } from "next/navigation"; // Uncomment when using Next.js router

// --- Types ---
export type View = "home" | "services" | "about" | "chat";

/**
 * Reusable Section Component
 */
export const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`w-full relative ${className}`}>
      {children}
    </section>
  );
};

const HomePage = () => {
  const [activeAudience, setActiveAudience] = useState<"phd" | "corp" | "lab">("phd");
  const [activeTab, setActiveTab] = useState("analysis");

  // --- Navigation Handler ---
  const onNavigate = (view: View) => {
    // redirect(view); 
    console.log(`Navigating to ${view}`);
  };

  const tabs = [
    {
      id: "analysis",
      label: "Analysis",
      icon: <Cpu className="w-4 h-4" />,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      title: "Statistical & Econometric Software",
      subtitle: "Hypothesis testing & advanced regression modeling.",
      content: [
        { tool: "SPSS", desc: "ANOVA, Factor Analysis", tag: "Social Sci" },
        { tool: "STATA", desc: "Panel Data, DiD Models", tag: "Econometrics" },
        { tool: "R / RStudio", desc: "Reproducible Research", tag: "Computing" },
        { tool: "Python", desc: "Pandas, SciPy, ML", tag: "Data Sci" },
      ],
    },
    {
      id: "cleaning",
      label: "Data Prep",
      icon: <Database className="w-4 h-4" />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      title: "Data Cleaning & Preparation",
      subtitle: "Structuring raw inputs into analysis-ready datasets.",
      content: [
        { tool: "Excel", desc: "Cleaning, Dashboards", tag: "Prep" },
        { tool: "Google Sheets", desc: "Collaborative Data", tag: "Collab" },
        { tool: "Longitudinal", desc: "Panel Structuring", tag: "Structure" },
        { tool: "Treatment", desc: "Missing Data Imputation", tag: "Quality" },
      ],
    },
    {
      id: "viz",
      label: "Visuals",
      icon: <BarChart3 className="w-4 h-4" />,
      color: "text-purple-600",
      bg: "bg-purple-50",
      title: "Visualization & Reporting",
      subtitle: "Translating metrics into clear, actionable intelligence.",
      content: [
        { tool: "Code-Based", desc: "ggplot2 (R), Seaborn", tag: "High-Fi" },
        { tool: "Dashboards", desc: "Power BI / Tableau", tag: "Interactive" },
        { tool: "Reporting", desc: "Publication Ready", tag: "Standards" },
        { tool: "Mapping", desc: "Geospatial Data", tag: "GIS" },
      ],
    },
    {
      id: "docs",
      label: "Docs",
      icon: <FileText className="w-4 h-4" />,
      color: "text-amber-600",
      bg: "bg-amber-50",
      title: "Research & Documentation",
      subtitle: "Ensuring outputs meet academic standards.",
      content: [
        { tool: "Word", desc: "Papers, Theses", tag: "Drafting" },
        { tool: "LaTeX", desc: "Academic Formatting", tag: "Typeset" },
        { tool: "References", desc: "EndNote & Zotero", tag: "Citations" },
        { tool: "Methodology", desc: "Technical Write-ups", tag: "Technical" },
      ],
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];
  const barHeights = useMemo(() => Array.from({ length: 8 }, () => Math.random() * 12 + 4), []);

  const audienceContent = {
    phd: {
      title: "For PhD Candidates",
      desc: "Focus on your dissertation narrative while we ensure your results are mathematically bulletproof.",
      features: [
        "Methodology Defense Preparation",
        "APA/Harvard Formatted Tables",
        "Power Analysis for Proposal",
        "G*Power Calculation",
      ],
      icon: <GraduationCap size={24} className="text-indigo-600" />,
    },
    corp: {
      title: "For Biotech & Corporate",
      desc: "Accelerate your R&D pipeline with outsourced statistical rigor that meets FDA/EMA standards.",
      features: [
        "Clinical Trial Data Analysis",
        "Market Segmentation Modeling",
        "Econometrics for Forecasting",
        "White-label Reporting",
      ],
      icon: <Building2 size={24} className="text-emerald-600" />,
    },
    lab: {
      title: "For Research Labs",
      desc: "Scale your publication output by offloading the data cleaning and analysis bottlenecks.",
      features: [
        "High-throughput Data Processing",
        "Grant Application Statistics",
        "Reproducible R/Python Scripts",
        "Longitudinal Study Management",
      ],
      icon: <FlaskConical size={24} className="text-amber-600" />,
    },
  };

  // Styled Buttons
  const primaryBtnClasses = "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ease-out active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900 shadow-lyra hover:bg-black hover:shadow-lyra-lg hover:-translate-y-0.5 bg-zinc-900 text-white";
  const secondaryBtnClasses = "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ease-out active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900 bg-white text-zinc-900 border border-zinc-200 shadow-sm hover:bg-zinc-50 hover:border-zinc-300 hover:shadow-lyra hover:-translate-y-0.5";

  return (
    <div className="bg-zinc-50 min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      
      {/* Hero Section */}
      <Section className="relative pt-32 pb-16 md:pb-48 px-6 overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-zinc-50/50 to-transparent blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-zinc-200 shadow-sm text-xs md:text-sm font-semibold text-zinc-600 mb-8 md:mb-10 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Accepting new projects for Q2 2024</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] font-display text-zinc-900">
            Precision-Driven
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500">
              Statistical Intelligence
            </span>
          </h1>

          <p className="text-base md:text-lg text-zinc-500 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light text-center px-2">
            We don't just process data. We engineer clarity. Empowering
            researchers with{" "}
            <span className="text-zinc-900 font-semibold decoration-indigo-200 underline decoration-2 underline-offset-4">
              publication-ready analysis
            </span>{" "}
            and methodological rigor.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-16 md:mb-24 px-4">
            <button
              onClick={() => onNavigate("services")}
              className={`${primaryBtnClasses} text-base md:text-lg px-8 py-4 md:px-12 md:py-5`}
            >
              Explore Services
              <ChevronRight size={20} className="opacity-70" />
            </button>
            <button
              onClick={() => onNavigate("about")}
              className={`${secondaryBtnClasses} text-base md:text-lg px-8 py-4 md:px-12 md:py-5 bg-white/80 backdrop-blur-sm`}
            >
              Why Choose Us
            </button>
          </div>

          {/* Abstract Dashboard - Fully Responsive */}
          <div className="relative max-w-5xl mx-auto transform transition-all duration-700 ease-out hover:-translate-y-1">
            <div className="bg-zinc-100 border border-zinc-200 rounded-[1.5rem] md:rounded-[2rem] p-2 overflow-hidden shadow-2xl backdrop-blur-sm">
              <div className="bg-white border border-zinc-200 rounded-[1rem] md:rounded-[1.5rem] min-h-[450px] md:min-h-[500px] grid grid-cols-12 relative overflow-hidden">
                
                {/* Desktop Sidebar (Hidden on Mobile) */}
                <div className="hidden md:flex col-span-3 flex-col border-r border-zinc-100 p-6 bg-zinc-50/30">
                  <div className="flex gap-1.5 mb-10">
                    <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/30"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/30"></div>
                  </div>
                  <nav className="space-y-1 relative z-20">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 text-left ${
                          activeTab === tab.id
                            ? "bg-zinc-900 text-white shadow-md ring-1 ring-zinc-900"
                            : "text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100"
                        }`}
                      >
                        <span className={activeTab === tab.id ? "text-white" : tab.color}>
                          {tab.icon}
                        </span>
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                  <div className="mt-auto pt-6 border-t border-zinc-100">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
                      <Settings size={12} /> Tool Configuration
                    </div>
                  </div>
                </div>

                {/* Dashboard Main Content */}
                <div className="col-span-12 md:col-span-9 flex flex-col h-full bg-white">
                  
                  {/* Mobile Tab Navigation (Visible only on Mobile) */}
                  <div className="md:hidden flex overflow-x-auto gap-2 p-4 border-b border-zinc-100 no-scrollbar">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                          activeTab === tab.id
                            ? "bg-zinc-900 text-white"
                            : "bg-zinc-50 text-zinc-500 border border-zinc-100"
                        }`}
                      >
                        <span className={activeTab === tab.id ? "text-white" : tab.color}>
                          {tab.icon}
                        </span>
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="p-6 md:p-8 space-y-6 md:space-y-8 flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-zinc-50 pb-6 gap-4">
                      <div className="text-left space-y-1">
                        <h4 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                          {currentTab.title}
                          <div className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        </h4>
                        <p className="text-sm text-zinc-400 font-light">
                          {currentTab.subtitle}
                        </p>
                      </div>
                      <div className="h-8 w-24 bg-indigo-50 rounded-lg border border-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600 self-start">
                        PRODUCTION
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentTab.content.map((item, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-zinc-50/50 border border-zinc-100 hover:border-zinc-300 hover:shadow-sm transition-all text-left group">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-bold text-zinc-800">{item.tool}</span>
                            <span className="text-[9px] font-mono font-bold bg-white text-zinc-400 border border-zinc-100 px-2 py-0.5 rounded uppercase group-hover:border-zinc-200">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-[12px] text-zinc-500 leading-snug">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto border-t border-zinc-100 bg-zinc-50/30 px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-widest">
                          System: Ready
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1">
                        {barHeights.map((h, i) => (
                          <div key={i} className="w-1 bg-zinc-200 rounded-full" style={{ height: `${h}px` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact Stats */}
      <Section className="bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: TrendingUp, val: "98%", label: "Acceptance Rate", color: "text-emerald-500" },
              { icon: Users, val: "500+", label: "Researchers", color: "text-indigo-500" },
              { icon: FileCheck, val: "12k", label: "Datasets Cleaned", color: "text-blue-500" },
              { icon: Award, val: "15+", label: "Years Experience", color: "text-amber-500" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center md:items-start group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3 text-zinc-900 mb-3">
                  <div className={`p-2 rounded-xl bg-white shadow-sm border border-zinc-100 ${item.color}`}>
                    <item.icon size={20} />
                  </div>
                  <span className="text-3xl md:text-4xl font-bold font-display tracking-tight">{item.val}</span>
                </div>
                <span className="text-xs md:text-sm text-zinc-500 font-medium pl-1">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- Verified Trust Section (Upwork & LinkedIn) --- */}
      <Section className="py-16 md:py-24 px-6 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center md:text-left">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck size={14} /> Verified Professional
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">Platform Credibility</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
            
            {/* Upwork Box (Larger) */}
            <div className="md:col-span-3 p-6 md:p-8 rounded-[2rem] border border-zinc-200 bg-[#14a800]/5 hover:border-[#14a800]/30 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#14a800]/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#14a800] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#14a800]/20 shrink-0">
                            <span className="font-bold text-xl">Up</span>
                        </div>
                        <div>
                             <h3 className="text-xl font-bold text-zinc-900">Upwork Verified</h3>
                             <p className="text-sm text-zinc-500">Top Rated Plus Status</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-zinc-200 shadow-sm self-start sm:self-auto">
                        <Trophy size={16} className="text-[#14a800]" />
                        <span className="text-sm font-bold text-zinc-900">100% Job Success</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm">
                        <div className="flex gap-1 text-amber-400 mb-2">
                             {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                        <p className="text-sm text-zinc-600 font-medium italic mb-3 leading-snug">"Absolute lifesaver for my PhD thesis. The statistical modeling was flawless."</p>
                        <div className="text-xs text-zinc-400 font-bold uppercase tracking-wide">Public Health Research</div>
                     </div>
                     <div className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm">
                        <div className="flex gap-1 text-amber-400 mb-2">
                             {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                        <p className="text-sm text-zinc-600 font-medium italic mb-3 leading-snug">"Delivered FDA-ready datasets ahead of schedule. Highly recommended."</p>
                        <div className="text-xs text-zinc-400 font-bold uppercase tracking-wide">Biotech Startup</div>
                     </div>
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#14a800] group-hover:gap-3 transition-all cursor-pointer">
                    View Upwork Profile <ArrowRight size={16} />
                </div>
            </div>

            {/* LinkedIn Box (Smaller) */}
            <div className="md:col-span-2 p-6 md:p-8 rounded-[2rem] border border-zinc-200 bg-[#0077b5]/5 hover:border-[#0077b5]/30 transition-all duration-300 flex flex-col justify-between">
                 <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-[#0077b5] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#0077b5]/20 shrink-0">
                        <Linkedin size={28} />
                    </div>
                    <button className="p-2 bg-white rounded-full border border-zinc-200 text-zinc-400 hover:text-[#0077b5] transition-colors">
                        <ExternalLink size={20} />
                    </button>
                 </div>
                 
                 <div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-2">Let's Connect</h3>
                    <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
                        Follow for daily tips on statistical methodology, R programming, and academic publishing.
                    </p>
                    
                    <button className="w-full py-3 bg-[#0077b5] hover:bg-[#006097] text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-md active:scale-95">
                        Connect on LinkedIn
                    </button>
                 </div>
            </div>

          </div>
        </div>
      </Section>

      {/* The Research Bottleneck */}
      <Section className="py-16 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-emerald-600 font-mono text-xs uppercase tracking-widest font-bold mb-4 block">
              The Reality Check
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-zinc-900 mb-6">
              Stop Wrestling with Data.
              <br />
              Start Writing Results.
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-base md:text-lg text-center">
              Statistical errors are the #1 reason for manuscript rejection. We eliminate that risk.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-red-50/50 border border-red-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <XCircle size={100}  className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                  <XCircle size={20} />
                </span>
                Without Support
              </h3>
              <ul className="space-y-6 text-zinc-600 text-left">
                {["Wasting weeks cleaning messy CSVs", "Anxiety over Reviewer #2 flaws", "Struggling to learn R from scratch"].map((item,i) =>(
                    <li key={i} className="flex gap-4 items-center">
                        <div className="min-w-[8px] h-2 rounded-full bg-red-400"></div>
                        <p>{item}</p>
                    </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-zinc-900 text-white shadow-2xl relative overflow-hidden group border border-zinc-800 md:translate-y-6">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <CheckCircle2 size={100}  className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </span>
                With StatsAnalysis
              </h3>
              <ul className="space-y-6 text-zinc-300 text-left">
                {[
                    "Clean, structured datasets in 48h", 
                    "Guaranteed methodological soundness", 
                    "Full reproducible code provided"
                ].map((item, i) => (
                   <li key={i} className="flex gap-4 items-center">
                      <div className="min-w-[8px] h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                      <p className="font-medium">{item}</p>
                   </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Bento Grid */}
      <Section className="py-16 md:py-32 px-6 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="text-center md:text-left w-full md:w-auto">
                 <div className="inline-flex items-center gap-2 mb-4 text-zinc-500">
                    <LayoutGrid size={16} className="text-indigo-500" />
                    <span className="text-xs font-mono uppercase tracking-widest">Our Capabilities</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-zinc-900">Complete Analytical Suite</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-6 h-auto md:h-[700px]">
            {/* Advanced Viz - Large Box */}
            <div className="md:col-span-2 md:row-span-2 p-8 md:p-10 rounded-[2.5rem] border border-zinc-200 bg-white hover:border-indigo-300 transition-all group overflow-hidden relative shadow-sm hover:shadow-lyra-lg">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
              <div className="flex flex-col h-full justify-between relative z-10 gap-8">
                <div className="text-left">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm text-indigo-600 border border-indigo-100">
                    <PieChart size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-zinc-900 mb-4">Advanced Visualization</h3>
                  <p className="text-zinc-500 leading-relaxed text-base md:text-lg">
                    We go beyond basic bar charts. We create publication-ready figures and interactive dashboards that tell the whole story.
                  </p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 shadow-inner h-32 md:h-auto">
                  <div className="flex items-end gap-2 md:gap-3 h-full justify-between px-2">
                    {[25, 45, 30, 70, 55, 90, 65, 80, 50, 60].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="w-full bg-indigo-500 rounded-sm opacity-80 group-hover:opacity-100 transition-all duration-500"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance - Wide Box */}
            <div className="md:col-span-2 p-8 md:p-10 rounded-[2.5rem] border border-zinc-200 bg-white hover:border-emerald-300 transition-all flex items-center justify-between group shadow-sm hover:shadow-lyra-lg relative overflow-hidden">
              <div className="relative z-10 max-w-sm text-left">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600 border border-emerald-100">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold font-display text-zinc-900 mb-2">HIPAA & GDPR Compliant</h3>
                <p className="text-zinc-500 mt-2 text-sm md:text-base">Your data privacy is non-negotiable. Secure servers & strict NDAs.</p>
              </div>
              <div className="hidden sm:flex w-32 h-32 rounded-full border-[6px] border-emerald-500/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                <Check size={32} className="text-emerald-500" />
              </div>
            </div>

            {/* Real-time - Small Box */}
            <div className="p-8 md:p-10 rounded-[2.5rem] border border-zinc-200 bg-white hover:border-amber-300 transition-all group hover:-translate-y-1 duration-300 shadow-sm text-left">
              <Activity size={32} className="text-amber-500 mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-display text-zinc-900 mb-3">Real-time Analysis</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Live analysis pipelines for continuous data streams.</p>
            </div>

            {/* Multi-Model - Small Box */}
            <div className="p-8 md:p-10 rounded-[2.5rem] border border-zinc-200 bg-white hover:border-blue-300 transition-all group hover:-translate-y-1 duration-300 shadow-sm text-left">
              <Layers size={32} className="text-blue-500 mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-display text-zinc-900 mb-3">Multi-Model Ensemble</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Combining classical statistics with modern machine learning.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Audience Section */}
      <Section className="py-16 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-zinc-900 mb-6">Who We Empower</h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {(["phd", "corp", "lab"] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveAudience(key)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                    activeAudience === key
                      ? "bg-zinc-900 text-white border-zinc-900"
                      : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  {key === "phd" ? "PhD Candidates" : key === "corp" ? "Corporate R&D" : "Research Labs"}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-16 border border-zinc-200 transition-all duration-500 shadow-xl shadow-zinc-200/40">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-8 text-left">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-zinc-100">
                  {audienceContent[activeAudience].icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-display text-zinc-900">
                  {audienceContent[activeAudience].title}
                </h3>
                <p className="text-base md:text-lg text-zinc-500 leading-relaxed">
                  {audienceContent[activeAudience].desc}
                </p>
                <ul className="space-y-4">
                  {audienceContent[activeAudience].features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-700 bg-white p-3 rounded-xl border border-zinc-100">
                      <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                      <span className="font-medium text-sm md:text-base">{feat}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => onNavigate("services")} className={`${primaryBtnClasses} w-full md:w-auto mt-4 py-4`}>
                  View Specific Solutions
                </button>
              </div>
              <div className="relative aspect-square md:aspect-[4/3] bg-white rounded-[2rem] border border-zinc-200 p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                <div className="w-full space-y-4 relative z-10">
                  <div className="h-4 w-1/3 bg-zinc-100 rounded"></div>
                  <div className="h-24 w-full bg-zinc-50 rounded-2xl border border-dashed border-zinc-200 flex items-center justify-center">
                    <span className="text-xs text-zinc-400 font-mono">analysis_output_v1.csv</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-10 bg-indigo-500/10 rounded-lg"></div>
                    <div className="h-10 bg-emerald-500/10 rounded-lg"></div>
                    <div className="h-10 bg-amber-500/10 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Footer */}
      <Section className="py-16 md:py-24 px-6 bg-white border-t border-zinc-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold font-display text-zinc-900 mb-6 md:mb-8 tracking-tight">
            Ready to Elevate Your Research?
          </h2>
          <p className="text-zinc-500 text-lg md:text-2xl mb-10 md:mb-12 max-w-2xl mx-auto font-light">
            Book a free discovery call. We'll discuss your data and how we can
            help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5">
            <button
              onClick={() => onNavigate("chat")}
              className={`${primaryBtnClasses} text-lg px-10 py-4 shadow-xl`}
            >
              Start Free Assessment
            </button>
            <button
              onClick={() => onNavigate("about")}
              className={`${secondaryBtnClasses} text-lg px-10 py-4`}
            >
              Learn More
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-zinc-400">
            <Clock size={16} /> <span>Response time: under 2 hours</span>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;