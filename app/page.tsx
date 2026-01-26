"use client";

import React, { useRef, useLayoutEffect } from "react";
import { Hero } from "@/components/Hero";
import { PageRoute } from "@/types";
import { TESTIMONIALS } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  BarChart3,
  Search,
  MessageSquare,
  Bell,
  Menu,
} from "lucide-react";

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HomeProps {
  onNavigate: (page: PageRoute) => void;
}

// --- COMPACT RESPONSIVE IPHONE COMPONENT ---
const IphoneMockup = () => {
  return (
    // Dimensions tuned for maximum compatibility:
    // Mobile: 240px x 490px (Fits iPhone SE / Small Androids)
    // Tablet: 270px x 550px
    // Desktop: 300px x 620px (Fits 13" Laptops vertically)
    <div className="relative w-[240px] h-[490px] sm:w-[270px] sm:h-[550px] md:w-[300px] md:h-[620px] bg-[#f2f2f2] rounded-[40px] md:rounded-[50px] border-[8px] md:border-[10px] border-[#303030] shadow-2xl overflow-hidden ring-1 ring-black/10 select-none mx-auto transform transition-all duration-300">
      {/* Hardware Buttons (Scaled down) */}
      <div className="absolute top-20 -left-[10px] md:-left-[12px] w-[2px] md:w-[3px] h-6 bg-[#252525] rounded-l-md"></div>
      <div className="absolute top-32 -left-[10px] md:-left-[12px] w-[2px] md:w-[3px] h-10 bg-[#252525] rounded-l-md"></div>
      <div className="absolute top-48 -left-[10px] md:-left-[12px] w-[2px] md:w-[3px] h-10 bg-[#252525] rounded-l-md"></div>
      <div className="absolute top-28 -right-[10px] md:-right-[12px] w-[2px] md:w-[3px] h-14 bg-[#252525] rounded-r-md"></div>

      {/* Screen Container */}
      <div className="w-full h-full bg-white relative overflow-hidden flex flex-col">
        {/* Dynamic Island (Scaled) */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[65px] md:w-[85px] h-[20px] md:h-[24px] bg-black rounded-full z-50 flex items-center justify-between px-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]"></div>
          <div className="w-1 h-1 rounded-full bg-[#0f3d18]"></div>
        </div>

        {/* Status Bar */}
        <div className="h-8 md:h-10 w-full flex justify-between items-center px-5 pt-2 text-[9px] font-bold text-black z-40">
          <span>9:41</span>
          <div className="flex gap-1">
            <Activity className="w-2.5 h-2.5" />
            <div className="w-3.5 h-2 bg-black rounded-[2px]"></div>
          </div>
        </div>

        {/* --- APP UI --- */}
        <div className="flex-1 overflow-hidden bg-slate-50 flex flex-col relative">
          {/* App Header */}
          <div className="px-5 pb-3 pt-2 flex justify-between items-center">
            <Menu className="w-4 h-4 text-slate-400" />
            <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
              <Bell className="w-3.5 h-3.5 text-blue-600" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="mx-5 mb-5 h-8 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center px-3 gap-2">
            <Search className="w-3.5 h-3.5 text-slate-300" />
            <div className="h-1.5 w-20 bg-slate-100 rounded-full"></div>
          </div>

          {/* Chart Card */}
          <div className="mx-5 p-3 bg-white rounded-xl shadow-sm border border-slate-100 mb-4">
            <div className="flex justify-between mb-3">
              <div className="h-1.5 w-12 bg-slate-200 rounded-full"></div>
              <div className="h-3.5 w-7 bg-green-100 rounded-full text-[7px] text-green-600 flex items-center justify-center font-bold">
                +12%
              </div>
            </div>
            <div className="flex items-end gap-1.5 h-20">
              {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-blue-500 rounded-t-[2px] opacity-80"
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>

          {/* List Items */}
          <div className="flex-1 bg-white rounded-t-[24px] p-5 shadow-[0_-5px_30px_rgba(0,0,0,0.03)]">
            <div className="text-[10px] font-bold text-slate-900 mb-3 uppercase tracking-wide">
              Recent Analysis
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <div className="h-1.5 w-24 bg-slate-800 rounded-full mb-1.5"></div>
                  <div className="h-1 w-16 bg-slate-200 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Action Button */}
          <div className="absolute bottom-5 right-5 w-10 h-10 bg-blue-600 rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center text-white">
            <MessageSquare className="w-4 h-4" />
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[90px] md:w-[100px] h-[3px] bg-black/90 rounded-full z-50"></div>
      </div>
    </div>
  );
};

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);
  const textCenterRef = useRef<HTMLDivElement>(null);

  // --- GSAP ANIMATION LOGIC (Responsive) ---
  useLayoutEffect(() => {
    // Only run GSAP code on the client
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // DESKTOP ANIMATION (> 768px)
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: true,
          },
        });

        // Initial State
        gsap.set(phoneRef.current, { scale: 0.9, y: 100 });
        gsap.set(textRightRef.current, { opacity: 0, x: 50 });
        gsap.set(textLeftRef.current, { opacity: 0, x: -50 });
        gsap.set(textCenterRef.current, { opacity: 0, y: 50 });

        // PHASE 1: Phone moves Left, Right Text Appears
        tl.to(phoneRef.current, {
          scale: 1,
          y: 0,
          x: "-25vw",
          rotation: -5,
          duration: 2,
          ease: "power2.out",
        })
          .to(
            textRightRef.current,
            { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
            "<0.5",
          )
          // PHASE 2: Phone moves Right, Left Text Appears
          .to(textRightRef.current, { opacity: 0, x: 50, duration: 1 }, ">1")
          .to(phoneRef.current, {
            x: "25vw",
            rotation: 5,
            duration: 3,
            ease: "power2.inOut",
          })
          .to(
            textLeftRef.current,
            { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
            "<0.5",
          )
          // PHASE 3: Phone Centers, Bottom Text Appears
          .to(textLeftRef.current, { opacity: 0, x: -50, duration: 1 }, ">1")
          .to(phoneRef.current, {
            x: "0vw",
            rotation: 0,
            scale: 1.05,
            duration: 3,
            ease: "back.out(1.7)",
          })
          .to(
            textCenterRef.current,
            { opacity: 1, y: 0, duration: 1.5 },
            "<0.5",
          );
      });

      // MOBILE ANIMATION (< 768px)
      mm.add("(max-width: 767px)", () => {
        // Reset props for static layout
        gsap.set(phoneRef.current, { clearProps: "all" });
        gsap.set(
          [textRightRef.current, textLeftRef.current, textCenterRef.current],
          { opacity: 1, x: 0, y: 0 },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-screen bg-[#fafafa] font-['Inter',_sans-serif] text-[#171717] overflow-x-hidden selection:bg-[#6366f1]/20"
    >
      {/* --- HERO SECTION --- */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#6366f1]/10 blur-[100px] mix-blend-multiply animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      <div className="relative z-10">
        <Hero onNavigate={onNavigate} />
      </div>

      {/* Methodology Section */}
      <section className="py-20 md:py-32 px-6 border-b border-[rgba(0,0,0,0.05)] bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start relative z-10">
          <div className="md:w-1/3 md:sticky md:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white mb-8 shadow-sm">
              <Activity className="w-3 h-3 text-[#6366f1]" />
              <span className="text-[10px] font-['JetBrains_Mono',_monospace] tracking-widest uppercase text-neutral-500">
                The Philosophy
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-['Newsreader',_serif] italic text-[#171717] leading-[1.1]">
              Beyond <br />
              <span className="text-neutral-400">black boxes.</span>
            </h2>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-6 group">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-neutral-200 shadow-sm group-hover:border-[#6366f1]/50 group-hover:bg-[#6366f1]/5 transition-colors duration-500">
                <Box className="w-6 h-6 text-[#171717] group-hover:text-[#6366f1] transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#171717] mb-3">
                  Statistical Rigor
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {`We don't rely on default hyperparameters. Every model is constructed with rigorous econometric testing to ensure coefficients are unbiased.`}
                </p>
              </div>
            </div>
            <div className="space-y-6 group">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-neutral-200 shadow-sm group-hover:border-[#6366f1]/50 group-hover:bg-[#6366f1]/5 transition-colors duration-500">
                <GitMerge className="w-6 h-6 text-[#171717] group-hover:text-[#6366f1] transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#171717] mb-3">
                  Reproducible Pipelines
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  Automated ETL pipelines using Python & SQL ingest, clean, and
                  visualize data in real-time, removing manual bottlenecks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCROLLING IPHONE SECTION --- */}
      <section
        ref={triggerRef}
        className="relative h-auto md:h-[300vh] bg-white border-t border-neutral-100"
      >
        <div className="md:sticky md:top-0 md:h-screen w-full flex flex-col items-center justify-start md:justify-center overflow-hidden py-16 md:py-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(99,102,241,0.05),transparent_70%)] pointer-events-none"></div>

          {/* THE PHONE */}
          <div
            ref={phoneRef}
            className="relative z-20 shadow-2xl rounded-[40px] md:rounded-[50px] mb-12 md:mb-0"
          >
            <IphoneMockup />
          </div>

          <div className="md:absolute inset-0 w-full max-w-7xl mx-auto pointer-events-none px-6">
            {/* TEXT 1: Analytics */}
            <div
              ref={textRightRef}
              className="md:absolute md:right-[10%] md:top-1/2 md:-translate-y-1/2 max-w-sm z-10 text-center md:text-left mb-12 md:mb-0 pointer-events-auto mx-auto md:mx-0"
            >
              <div className="p-3 bg-blue-50 rounded-xl inline-block mb-4 border border-blue-100">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-['Newsreader',_serif] italic text-[#171717] mb-4">
                Real-time Analytics
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                Track KPIs as they happen. Our mobile-first dashboards ensure
                you never miss a critical signal, no matter where you are.
              </p>
            </div>
            {/* TEXT 2: Security */}
            <div
              ref={textLeftRef}
              className="md:absolute md:left-[10%] md:top-1/2 md:-translate-y-1/2 max-w-sm z-10 text-center md:text-right mb-12 md:mb-0 pointer-events-auto mx-auto md:mx-0"
            >
              <div className="p-3 bg-emerald-50 rounded-xl inline-block mb-4 md:ml-auto border border-emerald-100">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-['Newsreader',_serif] italic text-[#171717] mb-4">
                Secure by Design
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                End-to-end encryption ensures your proprietary data remains
                yours. Compliant with GDPR and HIPAA standards.
              </p>
            </div>
            {/* TEXT 3: CTA
            <div
              ref={textCenterRef}
              className="md:absolute md:bottom-[10%] left-0 right-0 text-center z-30 pointer-events-auto"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#171717] mb-4">
                Your Data. <span className="text-[#6366f1]">Simplified.</span>
              </h3>
              <button
                onClick={() => onNavigate(PageRoute.CONTACT)}
                className="px-8 py-3 bg-[#171717] text-white rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg"
              >
                {`Get the App`}
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 relative z-10 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neutral-200 pb-8 gap-4">
            <h2 className="text-5xl md:text-7xl font-['Newsreader',_serif] italic text-[#171717] tracking-tight">
              Infrastructure
            </h2>
            <div className="flex md:block items-center justify-between w-full md:w-auto text-right">
              <div className="text-xs font-['JetBrains_Mono',_monospace] text-[#6366f1] uppercase tracking-widest mb-1 mr-4 md:mr-0">
                System Status
              </div>
              <div className="flex items-center justify-end gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                <span className="text-sm font-bold text-[#171717]">
                  Operational
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto md:grid-rows-[340px_340px_340px]">
            {/* Main Engine */}
            <div className="md:col-span-2 md:row-span-1 bg-white rounded-[2rem] p-8 md:p-10 flex flex-col justify-between group cursor-default relative overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 min-h-[300px]">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#6366f1]/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#6366f1]/10 transition-colors duration-700"></div>
              <div className="relative z-10 flex justify-between items-start">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                  <Cpu className="w-6 h-6 text-[#171717]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-['JetBrains_Mono',_monospace] text-neutral-400 uppercase">
                    Confidence
                  </span>
                  <span className="text-sm font-bold text-[#171717]">
                    99.4%
                  </span>
                </div>
              </div>
              <div className="relative z-10 mt-8">
                <h3 className="text-3xl font-['Newsreader',_serif] italic text-[#171717] mb-3">
                  Predictive Engine v3
                </h3>
                <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
                  Proprietary Bayesian models forecasting market shifts.
                </p>
                <div className="mt-6 flex items-end gap-1 h-12 opacity-80">
                  {[40, 70, 45, 90, 60, 80, 50, 95, 60, 80, 40, 70].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-neutral-200 rounded-t-sm transition-all duration-300 group-hover:bg-[#6366f1]"
                        style={{
                          height: `${h}%`,
                          transitionDelay: `${i * 30}ms`,
                        }}
                      ></div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Latency */}
            <div className="md:col-span-1 md:row-span-1 bg-white rounded-[2rem] p-8 flex flex-col justify-between group border border-neutral-200 shadow-sm hover:border-[#6366f1]/30 transition-colors min-h-[200px]">
              <div className="flex justify-between items-start">
                <Zap className="w-6 h-6 text-[#facc15]" />
                <span className="text-[10px] font-['JetBrains_Mono',_monospace] text-[#22c55e] bg-[#22c55e]/10 px-2 py-1 rounded-full border border-[#22c55e]/20">
                  LIVE
                </span>
              </div>
              <div>
                <div className="text-5xl font-['Newsreader',_serif] text-[#171717] tracking-tighter group-hover:scale-105 transition-transform origin-left">
                  12
                  <span className="text-2xl text-neutral-400 font-['Inter',_sans-serif] font-normal ml-1">
                    ms
                  </span>
                </div>
                <div className="text-xs text-neutral-400 mt-2 font-['JetBrains_Mono',_monospace] uppercase tracking-widest">
                  Global Latency
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="md:col-span-1 md:row-span-2 bg-white rounded-[2rem] p-8 flex flex-col relative overflow-hidden border border-neutral-200 shadow-sm min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10 pointer-events-none"></div>
              <h3 className="text-lg font-['Newsreader',_serif] italic mb-8 text-[#171717] relative z-20">
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
                    className="flex items-center gap-3 group/item cursor-default py-2 border-b border-neutral-100 hover:pl-2 transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover/item:bg-[#6366f1] transition-colors"></div>
                    <span className="text-sm text-neutral-500 group-hover/item:text-[#171717] transition-colors font-['JetBrains_Mono',_monospace]">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
              <Layers className="absolute bottom-8 right-8 w-24 h-24 text-neutral-100 z-0" />
            </div>

            {/* Global Scale */}
            <div className="md:col-span-1 md:row-span-1 bg-[#171717] text-white rounded-[2rem] p-8 flex flex-col justify-between shadow-xl group overflow-hidden relative min-h-[250px]">
              <div className="absolute top-0 right-0 p-8 opacity-20 scale-150 group-hover:rotate-12 transition-transform duration-700">
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
            <div className="md:col-span-2 md:row-span-1 bg-white rounded-[2rem] p-10 flex flex-col justify-center relative overflow-hidden group border border-neutral-200 shadow-sm min-h-[300px]">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#6366f1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-['JetBrains_Mono',_monospace] text-[#6366f1] uppercase tracking-widest mb-4">
                    Core Modules
                  </div>
                  <ul className="space-y-2">
                    {["Data Cleaning", "ETL Pipelines", "API Development"].map(
                      (item) => (
                        <li
                          key={item}
                          className="text-sm text-[#171717] flex items-center gap-2"
                        >
                          <ArrowUpRight className="w-3 h-3 text-neutral-400" />{" "}
                          {item}
                        </li>
                      ),
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
                          className="text-sm text-[#171717] flex items-center gap-2"
                        >
                          <ArrowUpRight className="w-3 h-3 text-neutral-400" />{" "}
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="md:col-span-2 md:row-span-1 bg-white rounded-[2rem] p-10 flex flex-col justify-center relative border border-neutral-200 shadow-sm hover:bg-neutral-50 transition-colors min-h-[250px]">
              <div className="relative z-10">
                <div className="text-xl md:text-2xl font-['Newsreader',_serif] italic text-[#171717] mb-6 leading-snug">
                  {TESTIMONIALS[0].text}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-400 border border-white shadow-inner"></div>
                  <div>
                    <div className="text-sm font-bold text-[#171717]">
                      {TESTIMONIALS[0].client}
                    </div>
                    <div className="text-[10px] font-['JetBrains_Mono',_monospace] text-neutral-500 uppercase tracking-widest">
                      {TESTIMONIALS[0].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div
              onClick={() => onNavigate(PageRoute.CONTACT)}
              className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-[#6366f1] to-[#4338ca] rounded-[2rem] p-10 flex items-center justify-between cursor-pointer group relative overflow-hidden shadow-2xl shadow-[#6366f1]/30 min-h-[250px]"
            >
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
                }}
              ></div>

              <div className="relative z-10">
                <div className="text-sm font-['JetBrains_Mono',_monospace] text-white/80 uppercase tracking-widest mb-2">
                  Ready to deploy?
                </div>
                <div className="text-3xl font-['Newsreader',_serif] italic text-white group-hover:translate-x-2 transition-transform duration-300">
                  Start Project
                </div>
              </div>

              <div className="w-16 h-16 rounded-full bg-white text-[#6366f1] flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition-all duration-300 shadow-xl relative z-10">
                <ArrowUpRight className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 md:py-40 px-6 text-center relative overflow-hidden bg-white border-t border-neutral-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-9xl font-['Newsreader',_serif] italic mb-8 text-[#171717] tracking-tighter">
            {`Let's build.`}
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-xl mx-auto font-light">
            Accepting commissions for Q3 2024.
          </p>
          <button
            onClick={() => onNavigate(PageRoute.CONTACT)}
            className="group relative px-10 py-5 bg-[#171717] text-white rounded-full text-lg font-bold hover:scale-105 active:scale-95 transition-transform overflow-hidden shadow-2xl shadow-neutral-900/20"
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
