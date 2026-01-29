import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Star,
  Quote,
  ChevronRight,
  TrendingUp,
  Users,
  FileCheck,
  Award,
  ArrowUpRight,
  BarChart3,
  Database,
  BookOpen,
  Zap,
  PieChart,
  Activity,
  Fingerprint,
  Layers,
  LayoutGrid,
  Check,
  XCircle,
  CheckCircle2,
  GraduationCap,
  Building2,
  FlaskConical,
  MousePointer2,
  ShieldCheck,
  Clock,
  BrainCircuit,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

// --- Types ---
export type View = "home" | "services" | "about" | "chat";

// --- Components ---

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

/**
 * Navigation Bar
 */
const Navbar = ({
  onNavigate,
  currentView,
}: {
  onNavigate: (v: View) => void;
  currentView: View;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; value: View }[] = [
    { label: "Services", value: "services" },
    { label: "About", value: "about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div
          onClick={() => onNavigate("home")}
          className="flex cursor-pointer items-center gap-2 font-display text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-black">
            <LayoutGrid size={18} />
          </div>
          StatsAnalysis
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-white ${
                currentView === item.value
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => onNavigate("chat")}
            className="btn-lyra-primary px-5 py-2 text-sm shadow-none"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-600 dark:text-zinc-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-100 bg-white px-6 py-4 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                onNavigate("home");
                setMobileMenuOpen(false);
              }}
              className="text-left font-medium text-zinc-600 dark:text-zinc-300"
            >
              Home
            </button>
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setMobileMenuOpen(false);
                }}
                className="text-left font-medium text-zinc-600 dark:text-zinc-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate("chat");
                setMobileMenuOpen(false);
              }}
              className="btn-lyra-primary w-full py-3"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

/**
 * Footer Component
 */
const Footer = ({ onNavigate }: { onNavigate: (v: View) => void }) => (
  <footer className="bg-white py-12 px-6 border-t border-zinc-100 dark:bg-zinc-950 dark:border-zinc-800">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2 font-display font-bold text-zinc-900 dark:text-white">
        <LayoutGrid size={20} /> StatsAnalysis
      </div>
      <div className="text-zinc-500 text-sm dark:text-zinc-400">
        © 2024 StatsAnalysis Intelligence. All rights reserved.
      </div>
      <div className="flex gap-4">
        <button className="btn-lyra-icon">
          <Twitter size={18} />
        </button>
        <button className="btn-lyra-icon">
          <Github size={18} />
        </button>
        <button className="btn-lyra-icon">
          <Linkedin size={18} />
        </button>
      </div>
    </div>
  </footer>
);

/**
 * Main HomePage Component
 */
export const HomePage: React.FC<{ onNavigate: (view: View) => void }> = ({
  onNavigate,
}) => {
  const [activeAudience, setActiveAudience] = useState<"phd" | "corp" | "lab">(
    "phd",
  );

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
      icon: <GraduationCap size={24} className="text-indigo-500" />,
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
      icon: <Building2 size={24} className="text-emerald-500" />,
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
      icon: <FlaskConical size={24} className="text-amber-500" />,
    },
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="relative pt-32 pb-48 px-6 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-zinc-50/50 to-transparent dark:from-indigo-900/20 dark:via-zinc-900/40 blur-3xl"></div>
          <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
          <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-emerald-100/30 dark:bg-emerald-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm text-sm font-semibold text-zinc-600 dark:text-zinc-300 mb-10 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all cursor-default backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Accepting new projects for Q2 2024</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.05] font-display text-zinc-900 dark:text-white">
            Precision-Driven
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-300 dark:to-zinc-500">
              Statistical Intelligence
            </span>
          </h1>

          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            We don't just process data. We engineer clarity.{" "}
            <br className="hidden md:block" />
            Empowering researchers with{" "}
            <span className="text-zinc-900 dark:text-white font-medium">
              publication-ready analysis
            </span>{" "}
            and methodological rigor.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-24">
            <button
              onClick={() => onNavigate("services")}
              className="btn-lyra-primary text-lg px-12 py-5 group"
            >
              Explore Services
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100"
              />
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="btn-lyra-secondary text-lg px-12 py-5 bg-white/50 backdrop-blur-sm"
            >
              Why Choose Us
            </button>
          </div>

          {/* Abstract Dashboard */}
          <div className="relative max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-700 ease-out">
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent z-10 h-full w-full"></div>
            <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-t-[2.5rem] p-3 shadow-2xl overflow-hidden opacity-90 backdrop-blur-sm">
              <div className="bg-white dark:bg-zinc-950 rounded-t-[2rem] border border-zinc-200 dark:border-zinc-800 aspect-[16/9] md:aspect-[21/9] p-8 grid grid-cols-12 gap-8 relative overflow-hidden">
                <div className="hidden md:block col-span-2 space-y-4 border-r border-zinc-100 dark:border-zinc-900 pr-4">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
                  </div>
                  <div className="h-2 w-16 bg-zinc-100 dark:bg-zinc-900 rounded-full mb-8"></div>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-2 w-full bg-zinc-50 dark:bg-zinc-900 rounded-full opacity-60"
                    ></div>
                  ))}
                </div>
                <div className="col-span-12 md:col-span-10 space-y-8">
                  <div className="flex justify-between items-center border-b border-zinc-50 dark:border-zinc-900 pb-4">
                    <div className="space-y-2">
                      <div className="h-6 w-48 bg-zinc-100 dark:bg-zinc-900 rounded-lg"></div>
                      <div className="h-3 w-32 bg-zinc-50 dark:bg-zinc-900 rounded-lg"></div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-8 w-24 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800"></div>
                      <div className="h-8 w-8 bg-zinc-100 dark:bg-zinc-900 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-2 h-40 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/10 dark:to-zinc-900 rounded-2xl border border-indigo-100/50 dark:border-indigo-500/10 relative overflow-hidden group">
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 flex items-end justify-around px-4 pb-4 gap-2">
                        {[40, 70, 45, 90, 65, 85].map((h, i) => (
                          <div
                            key={i}
                            style={{ height: `${h}%` }}
                            className="w-full bg-indigo-400 dark:bg-indigo-500 opacity-80 rounded-t-sm group-hover:h-full transition-all duration-700 delay-75"
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-1 h-40 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
                        <Activity size={16} />
                      </div>
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                          0.004
                        </div>
                        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                          P-Value
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 h-40 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center">
                        <Database size={16} />
                      </div>
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                          98.2%
                        </div>
                        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                          Confidence
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Banner */}
      <div className="border-y border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-sm font-semibold text-zinc-400 uppercase tracking-widest whitespace-nowrap">
            Trusted by researchers from
          </span>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {["Stanford", "MIT", "Oxford", "Cambridge", "Johns Hopkins"].map(
              (uni, i) => (
                <span
                  key={i}
                  className="text-xl font-display font-bold text-zinc-800 dark:text-zinc-200"
                >
                  {uni}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <Section className="bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              {
                icon: TrendingUp,
                val: "98%",
                label: "Paper Acceptance Rate",
                color: "text-emerald-500",
              },
              {
                icon: Users,
                val: "500+",
                label: "Researchers Assisted",
                color: "text-indigo-500",
              },
              {
                icon: FileCheck,
                val: "12k",
                label: "Datasets Cleaned",
                color: "text-blue-500",
              },
              {
                icon: Award,
                val: "15+",
                label: "Years Combined Experience",
                color: "text-amber-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center md:items-start group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 text-zinc-900 dark:text-white mb-3">
                  <div
                    className={`p-2 rounded-lg bg-white dark:bg-zinc-800 shadow-sm ${item.color}`}
                  >
                    <item.icon size={20} />
                  </div>
                  <span className="text-4xl font-bold font-display tracking-tight">
                    {item.val}
                  </span>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium pl-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* The Research Bottleneck */}
      <Section className="py-32 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold mb-4 block">
              The Reality Check
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-zinc-900 dark:text-white mb-6">
              Stop Wrestling with Data.
              <br />
              Start Writing Results.
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              Statistical errors are the #1 reason for manuscript rejection. We
              eliminate that risk.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="p-10 rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <XCircle size={120} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center">
                  <XCircle size={16} />
                </span>
                Without Support
              </h3>
              <ul className="space-y-6 text-zinc-600 dark:text-zinc-400">
                <li className="flex gap-4">
                  <div className="mt-1 min-w-[6px] h-1.5 rounded-full bg-red-400"></div>
                  <p>
                    Wasting weeks cleaning messy CSVs and recoding variables
                    manually.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-[6px] h-1.5 rounded-full bg-red-400"></div>
                  <p>
                    Anxiety over "Reviewer #2" finding methodological flaws.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-[6px] h-1.5 rounded-full bg-red-400"></div>
                  <p>
                    Struggling to learn R or Python while trying to write a
                    thesis.
                  </p>
                </li>
              </ul>
            </div>
            <div className="p-10 rounded-3xl bg-zinc-900 dark:bg-black text-white shadow-2xl shadow-zinc-200 dark:shadow-none relative overflow-hidden group transform md:-translate-y-4 md:translate-x-4 border border-zinc-800">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <CheckCircle2 size={120} className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <CheckCircle2 size={16} />
                </span>
                With StatsAnalysis
              </h3>
              <ul className="space-y-6 text-zinc-300">
                <li className="flex gap-4">
                  <div className="mt-1 min-w-[6px] h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                  <p>
                    <strong>Clean, structured datasets</strong> delivered in 48
                    hours.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-[6px] h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                  <p>
                    <strong>Guaranteed methodological soundness</strong> backed
                    by PhD statisticians.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-[6px] h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                  <p>
                    Full <strong>reproducible code</strong> provided for
                    transparency.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="py-32 px-6 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-zinc-500 dark:text-zinc-400">
              <LayoutGrid size={16} className="text-indigo-500" />
              <span className="text-xs font-mono uppercase tracking-widest">
                Our Capabilities
              </span>
            </div>
            <h2 className="text-4xl font-bold font-display text-zinc-900 dark:text-white mb-4">
              Complete Analytical Suite
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
              From exploratory data analysis to complex predictive modeling, we
              have the tools and expertise to handle it all.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
            <div className="md:col-span-2 md:row-span-2 p-10 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-indigo-300 dark:hover:border-indigo-800 transition-all group overflow-hidden relative shadow-sm hover:shadow-lyra-lg">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <PieChart
                      size={28}
                      className="text-indigo-600 dark:text-indigo-400"
                    />
                  </div>
                  <h3 className="text-3xl font-bold font-display text-zinc-900 dark:text-white mb-4">
                    Advanced Visualization
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg">
                    We go beyond basic bar charts. We create publication-ready
                    figures, interactive dashboards (Power BI/Shiny), and
                    complex multi-dimensional plots that tell the full story of
                    your data.
                  </p>
                </div>
                <div className="mt-10 bg-zinc-50 dark:bg-zinc-950 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-inner">
                  <div className="flex items-end gap-3 h-32 justify-between px-2">
                    {[25, 45, 30, 70, 55, 90, 65, 80, 50, 60].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="w-full bg-gradient-to-t from-indigo-500 to-indigo-300 dark:to-indigo-600 rounded-sm opacity-80 group-hover:opacity-100 transition-all duration-500"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 p-10 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-emerald-300 dark:hover:border-emerald-800 transition-all flex items-center justify-between group shadow-sm hover:shadow-lyra-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-l from-emerald-50/50 to-transparent dark:from-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 max-w-sm">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold font-display text-zinc-900 dark:text-white mb-2">
                  HIPAA & GDPR Compliant
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                  Your data privacy is non-negotiable. Secure servers & strict
                  NDAs.
                </p>
              </div>
              <div className="hidden sm:flex w-32 h-32 rounded-full border-[6px] border-emerald-500/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors relative z-10">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Check size={32} className="text-emerald-500" />
                </div>
              </div>
            </div>
            <div className="p-10 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-amber-300 dark:hover:border-amber-800 transition-all group hover:-translate-y-1 duration-300 shadow-sm hover:shadow-lyra-lg">
              <Activity
                size={32}
                className="text-amber-500 mb-8 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-bold font-display text-zinc-900 dark:text-white mb-3">
                Real-time Analysis
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Live analysis pipelines for continuous data streams and
                monitoring.
              </p>
            </div>
            <div className="p-10 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-blue-300 dark:hover:border-blue-800 transition-all group hover:-translate-y-1 duration-300 shadow-sm hover:shadow-lyra-lg">
              <Layers
                size={32}
                className="text-blue-500 mb-8 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-bold font-display text-zinc-900 dark:text-white mb-3">
                Multi-Model Ensemble
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Combining classical statistics with modern machine learning
                algorithms.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Audience Section */}
      <Section className="py-32 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-zinc-900 dark:text-white mb-6">
              Who We Empower
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {(["phd", "corp", "lab"] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveAudience(key)}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                    activeAudience === key
                      ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black"
                      : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800"
                  }`}
                >
                  {key === "phd"
                    ? "PhD Candidates"
                    : key === "corp"
                      ? "Corporate R&D"
                      : "Research Labs"}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-900/30 rounded-[3rem] p-8 md:p-16 border border-zinc-200 dark:border-zinc-800 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center">
                  {audienceContent[activeAudience].icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-display text-zinc-900 dark:text-white">
                  {audienceContent[activeAudience].title}
                </h3>
                <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {audienceContent[activeAudience].desc}
                </p>
                <ul className="space-y-4">
                  {audienceContent[activeAudience].features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300"
                    >
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate("services")}
                  className="btn-lyra-primary mt-4"
                >
                  View Specific Solutions
                </button>
              </div>
              <div className="relative aspect-square md:aspect-[4/3] bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-50/50 to-transparent dark:from-indigo-900/20 opacity-50"></div>
                {activeAudience === "phd" && (
                  <div className="space-y-4 w-full max-w-xs relative z-10">
                    <div className="h-4 w-1/3 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                    <div className="h-8 w-full bg-zinc-100 dark:bg-zinc-800 rounded-lg"></div>
                    <div className="h-8 w-full bg-zinc-100 dark:bg-zinc-800 rounded-lg"></div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-xl mt-4">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-sm font-bold">
                        <Check size={16} /> Thesis_Final_v2.docx
                      </div>
                    </div>
                  </div>
                )}
                {activeAudience === "corp" && (
                  <div className="grid grid-cols-2 gap-4 w-full relative z-10">
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center">
                      <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                        +24%
                      </div>
                      <div className="text-[10px] text-zinc-400 uppercase">
                        Efficiency
                      </div>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center">
                      <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                        -40%
                      </div>
                      <div className="text-[10px] text-zinc-400 uppercase">
                        Cost
                      </div>
                    </div>
                    <div className="col-span-2 p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-xl flex items-center justify-between">
                      <span className="font-bold text-indigo-700 dark:text-indigo-300">
                        FDA Compliant
                      </span>
                      <ShieldCheck size={18} className="text-indigo-500" />
                    </div>
                  </div>
                )}
                {activeAudience === "lab" && (
                  <div className="relative z-10 w-full flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600">
                        <FlaskConical size={20} />
                      </div>
                      <div className="h-2 w-24 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                    </div>
                    <div className="h-32 w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-end justify-between p-4">
                      {[20, 50, 30, 80, 45, 95].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className="w-8 bg-amber-400 dark:bg-amber-500 rounded-sm"
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold font-display text-zinc-900 dark:text-white mb-4">
                Expertise at Every Step
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                We provide end-to-end support for your research pipeline.
              </p>
            </div>
            <button
              onClick={() => onNavigate("services")}
              className="btn-lyra-secondary group hidden md:flex mt-4 md:mt-0"
            >
              View all services{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="group p-10 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-lyra-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => onNavigate("services")}
            >
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <BarChart3 size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4 text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Statistical Analysis
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                From simple regressions to complex SEM, Bayesian methods, and
                longitudinal studies.
              </p>
              <span className="text-sm font-bold flex items-center gap-2 text-zinc-900 dark:text-zinc-200 group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </div>
            <div
              className="group p-10 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-lyra-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => onNavigate("services")}
            >
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Database size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4 text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Data Engineering
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                Cleaning, merging, and imputation. We turn messy spreadsheets
                into structured datasets.
              </p>
              <span className="text-sm font-bold flex items-center gap-2 text-zinc-900 dark:text-zinc-200 group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </div>
            <div
              className="group p-10 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-lyra-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => onNavigate("services")}
            >
              <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-8 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <BookOpen size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4 text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                Publication Support
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                APA-formatted tables, method write-ups, and reviewer rebuttal
                assistance.
              </p>
              <span className="text-sm font-bold flex items-center gap-2 text-zinc-900 dark:text-zinc-200 group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Dark Workflow Section */}
      <Section className="py-32 bg-zinc-900 dark:bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-6 font-bold">
                The Workflow
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 leading-tight">
                From Chaos to Clarity
                <br />
                in 4 Steps
              </h2>
              <div className="space-y-10">
                {[
                  {
                    num: 1,
                    title: "Discovery & Planning",
                    text: "We review your hypotheses and raw data to design a robust analysis plan.",
                  },
                  {
                    num: 2,
                    title: "Data Preparation",
                    text: "Handling missing values, outliers, and normality checks to ensure validity.",
                  },
                  {
                    num: 3,
                    title: "Execution",
                    text: "Running models using R, Python, or SPSS with rigorous cross-validation.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold font-display text-xl group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 group-hover:text-emerald-400 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-zinc-400 font-light leading-relaxed text-lg">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-[100px]"></div>
              <div className="relative bg-zinc-800/80 border border-zinc-700/50 rounded-3xl p-8 backdrop-blur-md shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-6 border-b border-zinc-700 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="ml-2 text-xs text-zinc-500 font-mono">
                    analysis_script.py
                  </span>
                </div>
                <div className="font-mono text-xs md:text-sm text-zinc-300 space-y-3">
                  <div className="text-zinc-500"># Import libraries</div>
                  <div>
                    <span className="text-purple-400">import</span> pandas{" "}
                    <span className="text-purple-400">as</span> pd
                  </div>
                  <div>
                    <span className="text-purple-400">import</span>{" "}
                    statsmodels.api <span className="text-purple-400">as</span>{" "}
                    sm
                  </div>
                  <br />
                  <div className="text-zinc-500"># Run Mixed Effects Model</div>
                  <div>
                    model = sm.MixedLM(data[
                    <span className="text-emerald-400">'outcome'</span>], data[
                    <span className="text-emerald-400">'fixed_eff'</span>],
                    groups=data[
                    <span className="text-emerald-400">'subject'</span>])
                  </div>
                  <div>result = model.fit()</div>
                  <br />
                  <div>
                    <span className="text-blue-400">print</span>
                    (result.summary())
                  </div>
                  <div className="mt-6 p-5 bg-black/60 rounded-xl text-emerald-400 border-l-4 border-emerald-500">
                    {`> Optimization converged `}
                    <br />
                    {` > Log Likelihood: -245.32`} <br />
                    {`> p-value: 0.0021 **`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="py-32 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-zinc-900 dark:text-white mb-16 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "I was stuck on my dissertation analysis for 3 months. StatsAnalysis cleaned my data and ran the correct models in 3 days. I graduated on time because of them.",
                author: "Dr. Elena R.",
                role: "Clinical Psychology PhD",
              },
              {
                text: "Professional, fast, and incredibly knowledgeable. They didn't just give me numbers; they explained what they meant so I could write my discussion section confidently.",
                author: "James T.",
                role: "Research Fellow, Harvard",
              },
              {
                text: "Our biotech startup needed FDA-compliant verification for our seed round. The team delivered flawless reports that impressed our investors.",
                author: "Sarah L.",
                role: "CTO, BioGen Labs",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-zinc-50 dark:bg-zinc-900/50 p-10 rounded-[2.5rem] relative group hover:bg-white dark:hover:bg-zinc-900 hover:shadow-lyra-lg transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
              >
                <Quote className="text-indigo-200 dark:text-indigo-900/50 w-16 h-16 absolute top-8 left-8" />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={16}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 font-medium">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center font-bold text-zinc-500 dark:text-zinc-400">
                      {t.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white">
                        {t.author}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Study */}
      <Section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-900 dark:bg-zinc-800 rounded-[3rem] overflow-hidden relative text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="grid md:grid-cols-2 gap-12 p-12 md:p-24 relative z-10">
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white w-fit mb-8 text-xs font-mono tracking-widest backdrop-blur-md">
                  CASE STUDY
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                  Optimizing Clinical Trial Data for FDA Submission
                </h2>
                <p className="text-zinc-300 text-lg leading-relaxed mb-10 font-light">
                  We partnered with a mid-sized biotech firm to handle the
                  statistical verification of their Phase II trial results. By
                  implementing robust mixed-effects modeling and handling
                  missing data via multiple imputation, we ensured a seamless
                  review process.
                </p>
                <div className="flex gap-6">
                  <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl font-bold font-display text-white mb-1">
                      -40%
                    </div>
                    <div className="text-xs text-zinc-400 uppercase tracking-wider font-bold">
                      Review Time
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl font-bold font-display text-white mb-1">
                      100%
                    </div>
                    <div className="text-xs text-zinc-400 uppercase tracking-wider font-bold">
                      Compliance
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-full aspect-square bg-zinc-800 rounded-3xl border border-zinc-700 shadow-2xl p-8 rotate-2 hover:rotate-0 transition-transform duration-500 group">
                  <div className="w-full h-full bg-zinc-900/50 rounded-2xl overflow-hidden relative border border-zinc-700/50">
                    <div className="absolute inset-0 flex items-end justify-around pb-8 px-8 gap-4">
                      {[30, 50, 45, 75, 60].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className="w-full bg-indigo-500/80 rounded-t-sm group-hover:bg-indigo-400 transition-colors"
                        ></div>
                      ))}
                    </div>
                    <svg
                      className="absolute inset-0 w-full h-full p-8"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0 200 Q 50 150 100 180 T 200 100 T 300 50"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        className="drop-shadow-lg"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Footer */}
      <Section className="py-24 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold font-display text-zinc-900 dark:text-white mb-8 tracking-tight">
              Ready to Elevate
              <br />
              Your Research?
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
              Book a free 15-minute discovery call. We'll discuss your data,
              your goals, and how we can help you achieve them.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <button
                onClick={() => onNavigate("chat")}
                className="btn-lyra-primary text-lg px-10 py-4 shadow-xl shadow-zinc-200 dark:shadow-none"
              >
                Start Free Assessment
              </button>
              <button
                onClick={() => onNavigate("about")}
                className="btn-lyra-secondary text-lg px-10 py-4"
              >
                Learn More
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-2 text-sm text-zinc-400">
              <Clock size={16} />
              <span>Response time: under 2 hours</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
