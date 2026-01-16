"use client";

import React, { useState } from "react";
import { PageRoute } from "@/types";
import { SERVICES } from "@/constants";
import { Sparkles, CheckCircle2, ChevronDown } from "lucide-react";

interface ServicesProps {
  onNavigate: (page: PageRoute) => void;
}

const Services: React.FC<ServicesProps> = () => {
  const [openService, setOpenService] = useState<string | null>(SERVICES[0].id);

  return (
    <div className="min-h-screen pt-32 pb-20 relative bg-[#020410] font-['Inter',_sans-serif]">
      {/* CSS Keyframes for Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className="text-center mb-32"
          style={{
            animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] mb-6">
            <Sparkles className="w-3 h-3 text-[#6366f1]" />
            <span className="text-[10px] font-['JetBrains_Mono',_monospace] tracking-widest uppercase text-[#94a3b8]">
              Intelligence Suite
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-['Newsreader',_serif] italic mb-8 text-[#ffffff] tracking-tight">
            Capabilities
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto font-light leading-relaxed">
            {`We don't just deliver code; we deliver certainty. Our methodologies
            are rooted in academic rigor and battle-tested in enterprise
            environments.`}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openService === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setOpenService(isOpen ? null : service.id)}
                className={`spotlight-card glass-panel rounded-[2rem] overflow-hidden transition-all duration-500 cursor-pointer border ${
                  isOpen
                    ? "bg-white/[0.02]"
                    : "border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.1)]"
                }`}
                style={{
                  borderColor: isOpen ? "rgba(99, 102, 241, 0.3)" : "",
                }}
              >
                {/* Header Section */}
                <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-8 w-full md:w-auto">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isOpen
                          ? "bg-[#6366f1] text-[#ffffff]"
                          : "bg-[rgba(255,255,255,0.05)] text-[#94a3b8]"
                      }`}
                      style={
                        isOpen
                          ? { boxShadow: "0 0 30px rgba(99,102,241,0.4)" }
                          : {}
                      }
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-[10px] font-['JetBrains_Mono',_monospace] text-[#94a3b8] uppercase tracking-widest mb-1">
                        Module 0{index + 1}
                      </div>
                      <h2
                        className={`text-3xl md:text-4xl font-['Newsreader',_serif] italic transition-colors ${
                          isOpen ? "text-[#ffffff]" : "text-[#ffffff]/70"
                        }`}
                      >
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-12">
                    <p className="text-sm text-[#94a3b8] max-w-xs">
                      {service.description}
                    </p>
                    <div
                      className={`w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "rotate-180 bg-[rgba(255,255,255,0.1)]" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-[#ffffff]" />
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-8 md:p-12 pt-0 border-t border-[rgba(255,255,255,0.05)] grid grid-cols-1 md:grid-cols-3 gap-12">
                      {/* Col 1: Methodology */}
                      <div className="space-y-6">
                        <h3 className="text-sm font-bold text-[#ffffff] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]"></span>{" "}
                          The Methodology
                        </h3>
                        <p className="text-[#94a3b8] leading-relaxed text-sm">
                          {service.methodology}
                        </p>
                      </div>

                      {/* Col 2: Deliverables */}
                      <div className="space-y-6">
                        <h3 className="text-sm font-bold text-[#ffffff] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]"></span>{" "}
                          Core Deliverables
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                          {service.deliverables.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)]"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                              <span className="text-xs font-['JetBrains_Mono',_monospace] text-[#ffffff]/80">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Col 3: Stack */}
                      <div className="space-y-6">
                        <h3 className="text-sm font-bold text-[#ffffff] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]"></span>{" "}
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 rounded-md border border-[rgba(255,255,255,0.1)] text-xs font-['JetBrains_Mono',_monospace] text-[#94a3b8] hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-default"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <button className="w-full mt-4 py-3 rounded-xl bg-[#ffffff] text-[#020410] font-bold text-xs uppercase tracking-widest hover:bg-[#6366f1] hover:text-[#ffffff] transition-colors">
                          Request Spec Sheet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
