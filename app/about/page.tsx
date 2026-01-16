"use client";

import React, { useEffect, useRef } from "react";
import { PageRoute } from "@/types";
import {
  Brain,
  Code,
  Download,
  Cpu,
  Network,
  Fingerprint,
  ScanEye,
  Terminal,
  Activity,
} from "lucide-react";

interface AboutProps {
  onNavigate: (page: PageRoute) => void;
}

const About: React.FC<AboutProps> = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const { innerWidth, innerHeight } = window;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Limit rotation
      const rotateX = (y / rect.height) * -20;
      const rotateY = (x / rect.width) * 20;

      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    const cardContainer = cardRef.current?.parentElement;
    if (cardContainer) {
      cardContainer.addEventListener("mousemove", handleMouseMove);
      cardContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (cardContainer) {
        cardContainer.removeEventListener("mousemove", handleMouseMove);
        cardContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 overflow-x-hidden bg-background">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute left-0 bottom-1/3 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-8 animate-slide-up">
          <div>
            <div className="flex items-center gap-2 text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              <ScanEye className="w-4 h-4" /> Identity Verification
            </div>
            <h1 className="text-6xl md:text-9xl font-serif italic text-foreground tracking-tight leading-[0.9]">
              The Analyst
            </h1>
          </div>
          <div className="hidden md:block text-right pb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              Clearance Level: Top
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column: 3D Identity Card (Sticky) */}
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-32 w-full h-[500px] flex items-center justify-center cursor-move preserve-3d">
              <div
                ref={cardRef}
                className="relative w-full max-w-[380px] h-[480px] rounded-[2rem] transition-transform duration-100 ease-out preserve-3d"
              >
                {/* Card Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden transform translate-z-0">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                  {/* Top Details */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start opacity-70">
                    <Fingerprint className="w-8 h-8 text-white/20" />
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-white/50 uppercase">
                        ID_REF
                      </div>
                      <div className="text-xs font-mono text-white">
                        SRJ-8849
                      </div>
                    </div>
                  </div>

                  {/* Center Avatar/Monogram */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/10 flex items-center justify-center relative group">
                    <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow border-dashed"></div>
                    <div className="absolute inset-2 rounded-full border border-white/10 animate-reverse-spin"></div>
                    <span className="text-7xl font-serif italic text-white group-hover:text-primary transition-colors duration-500">
                      S
                    </span>
                  </div>

                  {/* Bottom Stats */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                      <div>
                        <div className="text-[10px] font-mono text-white/50 uppercase">
                          Role
                        </div>
                        <div className="text-sm font-medium text-white">
                          Architect
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-white/50 uppercase">
                          Base
                        </div>
                        <div className="text-sm font-medium text-white">
                          San Francisco
                        </div>
                      </div>
                    </div>
                    <button className="w-full mt-6 py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                      Download CV <Download className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Floating Elements for Parallax */}
                <div className="absolute -right-8 top-20 bg-black/80 backdrop-blur-md border border-white/20 p-4 rounded-xl transform translate-z-[40px] shadow-xl animate-float">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div
                  className="absolute -left-8 bottom-32 bg-black/80 backdrop-blur-md border border-white/20 p-4 rounded-xl transform translate-z-[60px] shadow-xl animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <Network className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:w-2/3 space-y-24 pt-10">
            {/* Introduction */}
            <div
              className="space-y-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl md:text-5xl font-serif leading-tight text-foreground">
                <span className="text-muted-foreground opacity-50">
                  System Message:{" "}
                </span>
                {`   "I operate at the intersection of rigorous`}{" "}
                <span className="text-white italic underline decoration-primary/50 underline-offset-4">
                  computer science
                </span>{" "}
                {` and economic theory."`}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground font-light leading-relaxed text-lg">
                <p>
                  Most data scientists stop at prediction. I focus on causality.
                  Using advanced econometric frameworks, I build systems that
                  {`don't`} just tell you what will happen, but <em>why</em> it
                  happens and how to change it.
                </p>
                <p>
                  With a Masters in CS and 6 years of deploying models for
                  Fortune 500s, my code is production-ready, scalable, and
                  mathematically sound.
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              {[
                { label: "Years Exp", value: "06", icon: Activity },
                { label: "Projects", value: "37+", icon: Terminal },
                { label: "Stack", value: "Full", icon: Cpu },
                { label: "Clients", value: "12", icon: Network },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl font-mono text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline / Trajectory */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-2xl font-serif italic text-foreground mb-10 flex items-center gap-4">
                Process Log <div className="h-px bg-white/10 flex-1"></div>
              </h3>

              <div className="space-y-0">
                {[
                  {
                    year: "2024",
                    role: "Independent Consultant",
                    company: "Global",
                    desc: "Deploying custom LLM architectures for Fintech.",
                    active: true,
                  },
                  {
                    year: "2019",
                    role: "Lead Data Scientist",
                    company: "QuantMetrics",
                    desc: "Managed a team of 5 engineers building automated ETL.",
                    active: false,
                  },
                  {
                    year: "2017",
                    role: "Masters in CS",
                    company: "Stanford",
                    desc: "Thesis on Bayesian Networks in Volatile Markets.",
                    active: false,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex gap-8 hover:bg-white/5 p-6 rounded-2xl transition-all border border-transparent hover:border-white/5"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-3 h-3 rounded-full border ${
                          item.active
                            ? "bg-green-500 border-green-500 shadow-[0_0_10px_lime]"
                            : "bg-transparent border-white/20"
                        }`}
                      ></div>
                      <div className="w-px h-full bg-white/10 my-2 group-last:hidden"></div>
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-foreground">
                          {item.role}
                        </h4>
                        <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                          {item.year}
                        </span>
                      </div>
                      <div className="text-sm font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                        {item.company}
                      </div>
                      <p className="text-muted-foreground font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <h3 className="text-2xl font-serif italic text-foreground mb-10 flex items-center gap-4">
                Arsenal <div className="h-px bg-white/10 flex-1"></div>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="spotlight-card p-8 rounded-3xl bg-black/40 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                      <Brain className="w-5 h-5" />
                    </div>
                    <div className="font-mono text-sm text-white uppercase tracking-widest">
                      Modeling
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "TensorFlow",
                      "PyTorch",
                      "Scikit-Learn",
                      "Prophet",
                      "XGBoost",
                      "Stan",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="spotlight-card p-8 rounded-3xl bg-black/40 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">
                      <Code className="w-5 h-5" />
                    </div>
                    <div className="font-mono text-sm text-white uppercase tracking-widest">
                      Engineering
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "R Studio",
                      "SQL",
                      "Docker",
                      "Kubernetes",
                      "AWS",
                      "React",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-muted-foreground hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
