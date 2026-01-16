"use client";

import React from "react";
import { Hero } from "@/components/Hero";
import { PageRoute } from "@/types";
import { TESTIMONIALS } from "@/constants";
import {
  ArrowUpRight,
  Cpu,
  Globe,
  Zap,
  Layers,
  ExternalLink,
  Activity,
  Box,
  GitMerge,
  ShieldCheck,
} from "lucide-react";

interface HomeProps {
  onNavigate: (page: PageRoute) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020410] font-['Inter',_sans-serif]">
      <Hero onNavigate={onNavigate} />

      {/* Methodology Section - Context Layer */}
      <section className="py-32 px-6 border-b border-[rgba(255,255,255,0.05)] bg-[#020410] relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start relative z-10">
          <div className="md:w-1/3 sticky top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] mb-8">
              <Activity className="w-3 h-3 text-[#6366f1]" />
              <span className="text-[10px] font-['JetBrains_Mono',_monospace] tracking-widest uppercase text-[#94a3b8]">
                The Philosophy
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-['Newsreader',_serif] italic text-[#ffffff] leading-[1.1]">
              Beyond <br />
              <span className="text-[#94a3b8] opacity-50">black boxes.</span>
            </h2>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6 group">
              <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center border border-[rgba(255,255,255,0.1)] group-hover:border-[#6366f1]/50 group-hover:bg-[#6366f1]/10 transition-colors duration-500">
                <Box className="w-6 h-6 text-[#ffffff] group-hover:text-[#6366f1] transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ffffff] mb-3">
                  Statistical Rigor
                </h3>
                <p className="text-[#94a3b8] leading-relaxed text-sm">
                  {`We don't rely on default hyperparameters. Every model is
                  constructed with rigorous econometric testing (OLS, GLS,
                  Time-Series) to ensure coefficients are unbiased, consistent,
                  and truly reflective of reality.`}
                </p>
              </div>
            </div>

            <div className="space-y-6 group">
              <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center border border-[rgba(255,255,255,0.1)] group-hover:border-[#6366f1]/50 group-hover:bg-[#6366f1]/10 transition-colors duration-500">
                <GitMerge className="w-6 h-6 text-[#ffffff] group-hover:text-[#6366f1] transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ffffff] mb-3">
                  Reproducible Pipelines
                </h3>
                <p className="text-[#94a3b8] leading-relaxed text-sm">
                  {` Data isn't static. We build automated ETL pipelines using
                  Python & SQL that ingest, clean, and visualize data in
                  real-time, removing manual bottlenecks and ensuring
                  version-controlled reproducibility.`}
                </p>
              </div>
            </div>

            <div className="space-y-6 group">
              <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center border border-[rgba(255,255,255,0.1)] group-hover:border-[#6366f1]/50 group-hover:bg-[#6366f1]/10 transition-colors duration-500">
                <ShieldCheck className="w-6 h-6 text-[#ffffff] group-hover:text-[#6366f1] transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ffffff] mb-3">
                  Enterprise Security
                </h3>
                <p className="text-[#94a3b8] leading-relaxed text-sm">
                  Infrastructure designed for compliance. We implement
                  role-based access control, data encryption at rest and in
                  transit, and thorough audit logging for sensitive financial or
                  healthcare data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFECT BENTO GRID */}
      <section className="py-32 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex justify-between items-end border-b border-[rgba(255,255,255,0.1)] pb-8">
            <h2 className="text-5xl md:text-7xl font-['Newsreader',_serif] italic text-[#ffffff] tracking-tight">
              Infrastructure
            </h2>
            <div className="hidden md:block text-right">
              <div className="text-xs font-['JetBrains_Mono',_monospace] text-[#6366f1] uppercase tracking-widest mb-1">
                System Status
              </div>
              <div className="flex items-center justify-end gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                <span className="text-sm font-bold text-[#ffffff]">
                  Operational
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 grid-rows-[340px_340px_340px]">
            {/* Main Engine */}
            <div className="md:col-span-2 md:row-span-1 spotlight-card glass-panel rounded-[2rem] p-10 flex flex-col justify-between group cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#6366f1]/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#6366f1]/30 transition-colors duration-700"></div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="p-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]">
                  <Cpu className="w-6 h-6 text-[#ffffff]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-['JetBrains_Mono',_monospace] text-[#94a3b8] uppercase">
                    Confidence
                  </span>
                  <span className="text-sm font-bold text-[#ffffff]">
                    99.4%
                  </span>
                </div>
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="text-3xl font-['Newsreader',_serif] italic text-[#ffffff] mb-3">
                  Predictive Engine v3
                </h3>
                <p className="text-sm text-[#94a3b8] max-w-sm leading-relaxed">
                  Proprietary Bayesian models forecasting market shifts.
                </p>

                <div className="mt-6 flex items-end gap-1 h-12 opacity-50">
                  {[40, 70, 45, 90, 60, 80, 50, 95, 60, 80, 40, 70].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-[#ffffff] rounded-t-sm transition-all duration-300 group-hover:bg-[#6366f1]"
                        style={{
                          height: `${h}%`,
                          transitionDelay: `${i * 30}ms`,
                        }}
                      ></div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Latency */}
            <div className="md:col-span-1 md:row-span-1 spotlight-card glass-panel rounded-[2rem] p-8 flex flex-col justify-between group hover:border-[#6366f1]/50 transition-colors">
              <div className="flex justify-between items-start">
                <Zap className="w-6 h-6 text-[#facc15]" />
                <span className="text-[10px] font-['JetBrains_Mono',_monospace] text-[#22c55e] bg-[#22c55e]/10 px-2 py-1 rounded-full border border-[#22c55e]/20">
                  LIVE
                </span>
              </div>
              <div>
                <div className="text-5xl font-['Newsreader',_serif] text-[#ffffff] tracking-tighter group-hover:scale-105 transition-transform origin-left">
                  12
                  <span className="text-2xl text-[#94a3b8] font-['Inter',_sans-serif] font-normal ml-1">
                    ms
                  </span>
                </div>
                <div className="text-xs text-[#94a3b8] mt-2 font-['JetBrains_Mono',_monospace] uppercase tracking-widest">
                  Global Latency
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="md:col-span-1 md:row-span-2 spotlight-card glass-panel rounded-[2rem] p-8 flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.8)] z-10 pointer-events-none"></div>
              <h3 className="text-lg font-['Newsreader',_serif] italic mb-8 text-[#ffffff] relative z-20">
                Full Stack
              </h3>
              <div className="space-y-2 relative z-10 flex-1 overflow-hidden">
                {[
                  "Python",
                  "R Studio",
                  "TensorFlow",
                  "PostgreSQL",
                  "Tableau",
                  "Docker",
                  "Kubernetes",
                  "AWS",
                  "React",
                  "TypeScript",
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 group/item cursor-default py-2 border-b border-[rgba(255,255,255,0.05)] hover:pl-2 transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.2)] group-hover/item:bg-[#6366f1] transition-colors"></div>
                    <span className="text-sm text-[#94a3b8] group-hover/item:text-[#ffffff] transition-colors font-['JetBrains_Mono',_monospace]">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
              <Layers className="absolute bottom-8 right-8 w-24 h-24 text-[rgba(255,255,255,0.05)] z-0" />
            </div>

            {/* Global Scale */}
            <div className="md:col-span-1 md:row-span-1 bg-[#ffffff] text-[#020410] rounded-[2rem] p-8 flex flex-col justify-between shadow-[0_0_50px_-10px_rgba(255,255,255,0.2)] group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 group-hover:rotate-12 transition-transform duration-700">
                <Globe className="w-32 h-32 -mr-10 -mt-10" />
              </div>
              <div className="relative z-10">
                <Globe className="w-6 h-6 mb-4" />
              </div>
              <div className="relative z-10">
                <div className="text-xl font-bold mb-1">Global</div>
                <div className="text-[10px] opacity-70 font-['JetBrains_Mono',_monospace] uppercase tracking-widest">
                  3 Regions Active
                </div>
              </div>
            </div>

            {/* Capabilities */}
            <div className="md:col-span-2 md:row-span-1 spotlight-card glass-panel rounded-[2rem] p-10 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#6366f1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-['JetBrains_Mono',_monospace] text-[#6366f1] uppercase tracking-widest mb-4">
                    Core Modules
                  </div>
                  <ul className="space-y-2">
                    {["Data Cleaning", "ETL Pipelines", "API Development"].map(
                      (item) => (
                        <li
                          key={item}
                          className="text-sm text-[#ffffff] flex items-center gap-2"
                        >
                          <ArrowUpRight className="w-3 h-3 text-[#94a3b8]" />{" "}
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-['JetBrains_Mono',_monospace] text-[#6366f1] uppercase tracking-widest mb-4">
                    Advanced Modules
                  </div>
                  <ul className="space-y-2">
                    {["Neural Networks", "Sentiment NLP", "Risk Modeling"].map(
                      (item) => (
                        <li
                          key={item}
                          className="text-sm text-[#ffffff] flex items-center gap-2"
                        >
                          <ArrowUpRight className="w-3 h-3 text-[#94a3b8]" />{" "}
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="md:col-span-2 md:row-span-1 spotlight-card glass-panel rounded-[2rem] p-10 flex flex-col justify-center relative hover:bg-[rgba(255,255,255,0.05)] transition-colors">
              <div className="relative z-10">
                <div className="text-2xl font-['Newsreader',_serif] italic text-[#ffffff] mb-6 leading-snug">
                  {TESTIMONIALS[0].text}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#374151] to-black border border-[rgba(255,255,255,0.1)]"></div>
                  <div>
                    <div className="text-sm font-bold text-[#ffffff]">
                      {TESTIMONIALS[0].client}
                    </div>
                    <div className="text-[10px] font-['JetBrains_Mono',_monospace] text-[#94a3b8] uppercase tracking-widest">
                      {TESTIMONIALS[0].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div
              onClick={() => onNavigate(PageRoute.CONTACT)}
              className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-[#6366f1] to-[#1e1b4b] rounded-[2rem] p-10 flex items-center justify-between cursor-pointer group relative overflow-hidden shadow-2xl shadow-[#6366f1]/20"
            >
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
                }}
              ></div>

              <div className="relative z-10">
                <div className="text-sm font-['JetBrains_Mono',_monospace] text-white/70 uppercase tracking-widest mb-2">
                  Ready to deploy?
                </div>
                <div className="text-3xl font-['Newsreader',_serif] italic text-[#ffffff] group-hover:translate-x-2 transition-transform duration-300">
                  Start Project
                </div>
              </div>

              <div className="w-16 h-16 rounded-full bg-[#ffffff] text-[#6366f1] flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition-all duration-300 shadow-xl relative z-10">
                <ArrowUpRight className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(99,102,241,0.1), transparent 40%)",
          }}
        ></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-7xl md:text-9xl font-['Newsreader',_serif] italic mb-8 text-[#ffffff] tracking-tighter">
            {`Let's build.`}
          </h2>
          <p className="text-xl text-[#94a3b8] mb-12 max-w-xl mx-auto font-light">
            Accepting commissions for Q3 2024.
          </p>
          <button
            onClick={() => onNavigate(PageRoute.CONTACT)}
            className="group relative px-10 py-5 bg-[#ffffff] text-[#020410] rounded-full text-lg font-bold hover:scale-105 active:scale-95 transition-transform overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Conversation <ExternalLink className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Home;
