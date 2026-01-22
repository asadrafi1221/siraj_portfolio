/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ArrowUpRight } from "lucide-react";

const ClientReviews = () => {
  const [activeEmoji, setActiveEmoji] = useState("⚡");
  const observer = useRef<any>(null);
  const reviewRefs = useRef<any>([]);

  const reviews = [
    {
      title: "Statistical Insight & Report Specialist",
      rating: 5.0,
      emoji: "🚀", // Fast & Thorough
      feedback:
        "Nice to work with Siraj. The work was impressively fast, thoroughly executed, and conceptually sound. Everything was delivered with clarity.",
    },
    {
      title: "Professional Data Analysis Using Stata",
      rating: 5.0,
      emoji: "🎯", // Accuracy
      feedback:
        "Siraj exceeded my expectations with his exceptional expertise in data analysis. His attention to detail and accuracy were awe-inspiring.",
    },
    {
      title: "PowerPoint Presentation Designer",
      rating: 4.6,
      emoji: "🎨", // Design
      feedback:
        "Siraj was easy to communicate with and tries his best to accommodate client's needs.",
    },
    {
      title: "R code Poisson Model assistance",
      rating: 5.0,
      emoji: "🧠", // Knowledge/Math
      feedback:
        "Siraj answered all my questions completely and quickly. He was very helpful in creating Poisson models.",
    },
    {
      title: "Data Visualization Specialist",
      rating: 5.0,
      emoji: "📊", // Visualization
      feedback:
        "Highly skilled Data Visualization Specialist with a deep understanding of R. His ability to transform complex data is truly impressive.",
    },
  ];

  // Logic to track which review is visible
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveEmoji(reviews[index].emoji);
          }
        });
      },
      {
        root: null,
        // Trigger when the element is in the center 20% of the viewport
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    reviewRefs.current.forEach((el: any) => {
      if (el) observer.current?.observe(el);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [reviews]);

  return (
    <section className="min-h-screen py-20 md:py-32 px-4 md:px-6 bg-[#fafafa] font-['Inter',_sans-serif] text-[#171717] selection:bg-[#14a800]/20">
      <div className="max-w-[1400px] mx-auto">
        {/* --- HEADER --- */}
        <div className="mb-20 md:mb-40 mt-10 md:mt-20 font-medium">
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[0.8] font-['Newsreader',_serif] italic tracking-tighter text-[#171717] opacity-90">
            What Clients Say <br />
            <span className="text-transparent bg-clip-text pr-3 bg-gradient-to-r from-[#6366f1] via-[#818cf8] to-[#6366f1]">
              About Me.
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 lg:gap-y-24 relative">
          {/* --- STICKY SIDEBAR / MOBILE FLOATING BAR --- */}
          <div className="lg:col-span-3 lg:h-full pointer-events-none lg:pointer-events-auto z-30 sticky top-4 lg:top-0">
            {/* 
                Mobile: Sticky top with backdrop blur 
                Desktop: Sticky top-32 with no blur 
            */}
            <div className="lg:sticky lg:top-32 inline-block">
              <div className="inline-flex items-center gap-3 border border-neutral-200/80 rounded-full pl-2 pr-4 py-2 bg-white/80 backdrop-blur-xl shadow-lg lg:shadow-sm transition-all duration-300 pointer-events-auto">
                {/* The "Awake" Emoji Container */}
                <div
                  key={activeEmoji}
                  className="w-8 h-8 rounded-full bg-[#14a800]/10 flex items-center justify-center text-lg "
                >
                  {activeEmoji}
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] font-['JetBrains_Mono',_monospace] font-bold tracking-widest uppercase text-[#14a800]">
                    Upwork
                  </span>
                  <span className="text-[9px] text-neutral-400 font-medium leading-none">
                    Verified Feedback
                  </span>
                </div>
              </div>

              <div className="hidden lg:block mt-8">
                <p className="text-sm text-neutral-400 max-w-[200px] leading-relaxed">
                  Scroll to read verified reviews from recent contracts.
                </p>
              </div>
            </div>
          </div>

          {/* --- REVIEWS FEED --- */}
          <div className="lg:col-span-9 flex flex-col">
            {reviews.map((job, i) => (
              <div
                key={i}
                data-index={i}
                ref={(el: any) => (reviewRefs.current[i] = el)}
                className="group relative border-t border-neutral-200 py-16 md:py-20 hover:border-[#14a800] transition-colors duration-700"
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-between">
                  {/* 1. The Quote (Hero) */}
                  <div className="w-full md:w-3/4">
                    <div className="text-2xl md:text-3xl lg:text-5xl font-['Newsreader',_serif] font-light leading-tight text-[#171717] group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500 ease-out">
                      {`${job.feedback}`}
                    </div>

                    <div className="mt-8 md:mt-10 flex items-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="h-px w-8 md:w-12 bg-[#14a800]"></div>
                      <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest font-['JetBrains_Mono',_monospace]">
                        {job.title}
                      </h3>
                    </div>
                  </div>

                  {/* 2. The Rating (Visual Anchor) */}
                  <div className="w-full md:w-1/4 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start pt-4 md:pt-0">
                    <div className="flex items-center gap-1 mb-0 md:mb-2">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className={`w-4 h-4 md:w-5 md:h-5 ${
                            starIdx < Math.floor(job.rating)
                              ? "fill-[#14a800] text-[#14a800]"
                              : "fill-neutral-200 text-neutral-200"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-4xl md:text-6xl font-['Newsreader',_serif] italic text-neutral-200 group-hover:text-[#171717] transition-colors duration-500">
                      {job.rating.toFixed(1)}
                    </div>
                  </div>
                </div>

                {/* 3. Hover Background Reveal */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 pointer-events-none"></div>
              </div>
            ))}

            {/* Footer Link */}
            {/* <div className="border-t border-neutral-200 py-12 flex justify-start md:justify-end">
              <a
                href="https://www.upwork.com/"
                target="_blank"
                rel="noreferrer"
                className="text-lg md:text-xl font-['Newsreader',_serif] italic hover:text-[#14a800] transition-colors flex items-center gap-2 group"
              >
                View complete profile history
                <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
