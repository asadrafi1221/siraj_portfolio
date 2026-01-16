"use client";

import React from "react";
import { PageRoute } from "@/types";
import { PORTFOLIO_ITEMS } from "@/constants";
import { ArrowUpRight, Target, Zap, BarChart2 } from "lucide-react";

interface PortfolioProps {
  onNavigate: (page: PageRoute) => void;
}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#020410] font-['Inter',_sans-serif]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8 border-b border-[rgba(255,255,255,0.05)] pb-12">
          <div>
            <span className="text-[#6366f1] font-['JetBrains_Mono',_monospace] text-xs tracking-widest uppercase mb-4 block">
              Selected Works
            </span>
            <h1 className="text-7xl md:text-9xl font-['Newsreader',_serif] italic text-[#ffffff] tracking-tight leading-[0.9]">
              Case Studies
            </h1>
          </div>
          <div className="flex gap-2 flex-wrap">
            {["All", "BI", "Predictive", "Research"].map((filter) => (
              <button
                key={filter}
                className="px-6 py-3 rounded-full border border-[rgba(255,255,255,0.1)] text-xs font-['JetBrains_Mono',_monospace] uppercase tracking-widest text-[#94a3b8] hover:bg-[#ffffff] hover:text-[#020410] transition-all bg-[rgba(255,255,255,0.05)] backdrop-blur-sm"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Items List */}
        <div className="flex flex-col gap-32">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div key={item.id} className="group">
              {/* Header: Number + Title */}
              <div className="flex items-baseline gap-6 mb-8 border-b border-[rgba(255,255,255,0.1)] pb-8">
                <span className="text-sm font-['JetBrains_Mono',_monospace] text-[#6366f1]">
                  0{index + 1}
                </span>
                <h2 className="text-4xl md:text-6xl font-['Newsreader',_serif] text-[#ffffff] group-hover:text-[#6366f1] transition-colors duration-500 cursor-pointer">
                  {item.title}
                </h2>
                <ArrowUpRight className="w-8 h-8 text-[#94a3b8] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2 group-hover:-translate-y-2 ml-auto" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column: Context & Metadata */}
                <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs font-['JetBrains_Mono',_monospace] text-[#94a3b8] uppercase tracking-widest mb-2">
                        Category
                      </div>
                      <div className="text-lg text-[#ffffff]">
                        {item.category}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-['JetBrains_Mono',_monospace] text-[#94a3b8] uppercase tracking-widest mb-2">
                        Year
                      </div>
                      <div className="text-lg text-[#ffffff]">{item.year}</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] relative overflow-hidden group/card hover:border-[#6366f1]/20 transition-colors">
                      <Target className="w-5 h-5 text-red-400 mb-3" />
                      <h3 className="text-sm font-bold text-[#ffffff] mb-2">
                        The Challenge
                      </h3>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] relative overflow-hidden group/card hover:border-[#6366f1]/20 transition-colors">
                      <Zap className="w-5 h-5 text-yellow-400 mb-3" />
                      <h3 className="text-sm font-bold text-[#ffffff] mb-2">
                        The Solution
                      </h3>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 border border-[rgba(255,255,255,0.1)] rounded-full text-[10px] font-['JetBrains_Mono',_monospace] uppercase text-[#94a3b8]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Cinematic Image Container */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden spotlight-card bg-[rgba(255,255,255,0.01)]">
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-[#6366f1]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                    />

                    {/* Floating Impact Metric */}
                    <div className="absolute bottom-8 left-8 glass-panel px-6 py-4 rounded-2xl flex items-center gap-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <div className="w-10 h-10 rounded-full bg-[#22c55e]/20 flex items-center justify-center text-[#4ade80]">
                        <BarChart2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-['JetBrains_Mono',_monospace] text-[#94a3b8] uppercase tracking-widest">
                          Impact
                        </div>
                        <div className="text-xl font-bold text-[#ffffff]">
                          {item.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
