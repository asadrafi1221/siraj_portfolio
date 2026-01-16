"use client";

import React from "react";
import { PageRoute } from "@/types";
import {
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  Command,
  Terminal,
  Copy,
  Check,
} from "lucide-react";

interface ContactProps {
  onNavigate: (page: PageRoute) => void;
}

const Contact: React.FC<ContactProps> = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@sirajanalytics.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-background selection:bg-primary/30">
      {/* Animated Perspective Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Spotlight Overlay */}
      <div className="absolute inset-0 bg-spotlight-gradient opacity-10 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 animate-slide-up">
          <div>
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-green-400">
                System Online • Accepting Projects
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif italic text-foreground tracking-tight leading-[0.9]">
              Initialize <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                Sequence.
              </span>
            </h1>
          </div>
          <div className="hidden md:block text-right pb-2 opacity-60">
            <div className="text-xs font-mono text-muted-foreground">
              LATENCY: 12ms
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              ENCRYPTION: 256-BIT
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Contact Data Terminal */}
          <div
            className="lg:col-span-5 space-y-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Whether you need a predictive engine for high-frequency trading or
              a causal inference model for healthcare policy, we engineer
              clarity from chaos.
            </p>

            <div className="glass-panel rounded-[2rem] p-8 border border-white/10 relative overflow-hidden group">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono text-muted-foreground uppercase">
                  Transmission_Feed
                </span>
              </div>

              <div className="space-y-6">
                {/* Email Item */}
                <div
                  onClick={copyEmail}
                  className="flex items-center gap-6 p-4 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 hover:border-primary/30 transition-all group/item"
                >
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/10 text-white group-hover/item:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">
                      Direct Line
                    </div>
                    <div className="text-lg font-serif italic text-foreground">
                      hello@sirajanalytics.com
                    </div>
                  </div>
                  <div className="text-muted-foreground group-hover/item:text-white transition-colors">
                    {copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-6 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all group/item">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/10 text-white group-hover/item:text-primary transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">
                      Base of Operations
                    </div>
                    <div className="text-lg font-serif italic text-foreground">
                      San Francisco / Remote
                    </div>
                  </div>
                </div>

                {/* Schedule Item */}
                <div className="flex items-center gap-6 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all group/item">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/10 text-white group-hover/item:text-primary transition-colors">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">
                      Availability
                    </div>
                    <div className="text-lg font-serif italic text-foreground">
                      Q3 2024 Slots Open
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
              <div className="text-xs font-mono text-muted-foreground mb-2">
                Prefer async?
              </div>
              <div className="text-sm text-foreground">
                We typically respond to RFPs within 24 hours.
              </div>
            </div>
          </div>

          {/* Right Column: The "Payload" Form */}
          <div
            className="lg:col-span-7 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <form className="spotlight-card glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
              {/* Decorative header inside form */}
              <div className="absolute top-0 right-0 p-6 opacity-30 pointer-events-none">
                <Command className="w-24 h-24 text-white/5 -rotate-12" />
              </div>

              <div className="relative z-10 space-y-8">
                <h3 className="text-2xl font-serif italic text-foreground mb-8">
                  Payload Data
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      className="block py-4 px-0 w-full text-lg text-foreground bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="name"
                      className="peer-focus:font-medium absolute text-sm text-muted-foreground duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-mono uppercase tracking-widest"
                    >
                      Client Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      className="block py-4 px-0 w-full text-lg text-foreground bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="email"
                      className="peer-focus:font-medium absolute text-sm text-muted-foreground duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-mono uppercase tracking-widest"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                {/* Select Input */}
                <div className="relative group pt-4">
                  <label className="block mb-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Protocol / Subject
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {["Data Engineering", "Econometrics", "Consulting"].map(
                      (opt) => (
                        <label key={opt} className="cursor-pointer">
                          <input
                            type="radio"
                            name="subject"
                            className="peer sr-only"
                          />
                          <div className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-muted-foreground peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all text-center hover:bg-white/10">
                            {opt}
                          </div>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative group pt-4">
                  <textarea
                    rows={4}
                    id="message"
                    className="block py-4 px-0 w-full text-lg text-foreground bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors resize-none"
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="peer-focus:font-medium absolute text-sm text-muted-foreground duration-300 transform -translate-y-6 scale-75 top-7 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-mono uppercase tracking-widest"
                  >
                    Briefing
                  </label>
                </div>

                <div className="pt-6">
                  <button className="w-full bg-foreground text-background font-bold py-6 rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-4 group">
                    <span className="tracking-widest uppercase text-sm">
                      Initiate Transmission
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
