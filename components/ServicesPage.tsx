import React from 'react';
import { Section } from './Section';
import { Database, BarChart3, Calculator, BookOpen, PenTool, FileSpreadsheet, PieChart, Network, ArrowUpRight, Check, HelpCircle, ChevronDown, ChevronRight, Briefcase, Clock, Zap, Microscope, GraduationCap, Building2, Landmark } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <BarChart3 size={20} />,
      title: "1. Comprehensive Statistical Analysis",
      desc: "Our core expertise lies in converting complex datasets into clear, actionable insights.",
      details: [
        "Descriptive & Inferential Statistics",
        "Advanced Modelling: Regression, FA, SEM",
        "Mediation, Moderation & Survival Analysis",
        "Non-Parametric Testing"
      ]
    },
    {
      icon: <Database size={20} />,
      title: "2. Data Management & Preparation",
      desc: "Reliable results begin with clean data. We take the heavy lifting out of organization.",
      details: [
        "Data Cleaning & Outlier Handling",
        "Variable Coding & Structuring",
        "Normalization & Transformation"
      ]
    },
    {
      icon: <Calculator size={20} />,
      title: "3. Software Proficiency",
      desc: "We work across all industry-standard platforms. You provide the data; we provide the mastery.",
      details: [
        "IBM SPSS Statistics",
        "R-Studio, Stata & MATLAB",
        "Python Data Mining",
        "NVivo & MAXQDA"
      ]
    },
    {
      icon: <BookOpen size={20} />,
      title: "4. Specialized Publication Support",
      desc: "Bridge the gap between raw output and a peer-reviewed manuscript.",
      details: [
        "Statistical Verification Audit",
        "Results Chapter Drafting (APA/Harvard)",
        "Visual Data Storytelling",
        "Peer Review Defense"
      ]
    },
    {
      icon: <PenTool size={20} />,
      title: "5. Research Design & Consulting",
      desc: "Start your project on the right foot with expert guidance during the planning phase.",
      details: [
        "Sample Size & Power Analysis",
        "Methodology Development",
        "Survey Design & Validation"
      ]
    },
    {
      icon: <FileSpreadsheet size={20} />,
      title: "6. Intelligent Automation",
      desc: "Transform spreadsheets into 'living' tools that handle the heavy lifting.",
      details: [
        "VBA (Excel) & Apps Script",
        "API Workflow Integration",
        "Dynamic Automated Dashboards"
      ]
    },
    {
      icon: <Network size={20} />,
      title: "7. Power BI & Interactive Viz",
      desc: "Don’t just report data—show it. Immersive, high-definition dashboards.",
      details: [
        "Bespoke KPI Dashboards",
        "SQL & Cloud Data Integration",
        "AI Trend Discovery"
      ]
    },
    {
      icon: <PieChart size={20} />,
      title: "8. Strategy & Consulting",
      desc: "The most successful projects are built on a solid foundation.",
      details: [
        "Power Analysis for Significance",
        "Psychometric Testing",
        "Software Stack Consulting"
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-full">
      {/* Header with Lyra Gradient */}
      <div className="relative border-b border-zinc-200 dark:border-zinc-800 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-transparent dark:from-indigo-900/20 dark:via-zinc-950 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-6">
             <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
             Expert Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display text-zinc-900 dark:text-white tracking-tight">Our Services</h1>
          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            From initial data cleaning to final publication-ready reports, we provide the technical expertise you need. We bridge the gap between complex data and clear understanding.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Industries Section */}
        <Section className="mb-32">
           <h2 className="reveal-text text-3xl font-bold font-display text-zinc-900 dark:text-white mb-12">Industries We Serve</h2>
           <div className="grid md:grid-cols-4 gap-6">
              {[
                 { icon: <Microscope size={24} />, name: "Healthcare & Clinical", desc: "Clinical trials, epidemiology, and biostatistics." },
                 { icon: <GraduationCap size={24} />, name: "Academic Research", desc: "Thesis support, grant applications, and peer review." },
                 { icon: <Building2 size={24} />, name: "Market Research", desc: "Consumer behavior, segmentation, and A/B testing." },
                 { icon: <Landmark size={24} />, name: "Policy & Gov", desc: "Econometrics, census data, and public health impact." },
              ].map((ind, i) => (
                 <div key={i} className="reveal-text bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group">
                    <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-xl shadow-sm flex items-center justify-center text-zinc-900 dark:text-white mb-4 group-hover:scale-110 transition-transform">
                       {ind.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">{ind.name}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{ind.desc}</p>
                 </div>
              ))}
           </div>
        </Section>

        {/* Boxy Grid Container */}
        <Section className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-sm mb-32 rounded-lg overflow-hidden">
          {services.map((service, index) => (
            <div key={index} className="reveal-text bg-white dark:bg-zinc-950 p-10 h-full flex flex-col hover:bg-zinc-50/50 dark:hover:bg-zinc-900 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <ArrowUpRight size={20} className="text-zinc-300 dark:text-zinc-600" />
              </div>
              
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 font-display text-zinc-900 dark:text-white leading-tight group-hover:text-black dark:group-hover:text-zinc-200">{service.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 leading-relaxed flex-grow font-light">{service.desc}</p>
              
              <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900 mt-auto">
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mt-1 flex-shrink-0 group-hover:bg-zinc-900 dark:group-hover:bg-white transition-colors" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Section>

        {/* Workflow Section */}
        <Section className="mb-32">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="reveal-text text-3xl font-bold font-display text-zinc-900 dark:text-white mb-6">Our Methodology</h2>
              <p className="reveal-text text-zinc-500 dark:text-zinc-400">We follow a rigorous, transparent process to ensure your data is handled with the utmost care and scientific integrity.</p>
           </div>
           
           <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-zinc-100 dark:bg-zinc-800 -z-10"></div>
              
              {[
                 { step: "01", title: "Discovery", desc: "We begin with a deep-dive consultation to understand your research questions, hypotheses, and data structure." },
                 { step: "02", title: "Preparation", desc: "Data is cleaned, coded, and normalized. We handle missing values and test assumptions before any analysis begins." },
                 { step: "03", title: "Analysis", desc: "We execute the agreed-upon statistical tests using industry-standard software (R, SPSS, Python), documenting every step." },
                 { step: "04", title: "Delivery", desc: "Results are presented in a comprehensive report with high-quality visualizations and interpretation guides." }
              ].map((item, i) => (
                 <div key={i} className="reveal-text bg-white dark:bg-zinc-900 p-8 border border-zinc-100 dark:border-zinc-800 rounded-3xl shadow-sm relative">
                    <div className="w-10 h-10 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full flex items-center justify-center font-bold font-display mb-6 shadow-lg shadow-zinc-200 dark:shadow-none z-10 relative">
                       {item.step}
                    </div>
                    <h3 className="text-xl font-bold font-display text-zinc-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                 </div>
              ))}
           </div>
        </Section>

        {/* Engagement Models */}
        <Section className="bg-zinc-900 dark:bg-black text-white rounded-[2.5rem] p-12 mb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-zinc-900 dark:via-zinc-950 to-transparent pointer-events-none"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="reveal-text text-3xl md:text-4xl font-bold font-display mb-16 text-center">Flexible Engagement Models</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Hourly */}
              <div className="reveal-text p-8 rounded-2xl bg-zinc-800 dark:bg-zinc-900 border border-zinc-700/50 hover:bg-zinc-700/80 transition-all group">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 rounded-lg bg-zinc-700 text-zinc-300 group-hover:bg-zinc-600 group-hover:text-white transition-colors"><Clock size={20} /></div>
                    <span className="text-zinc-400 text-sm font-mono uppercase tracking-widest">Consultation</span>
                  </div>
                  <div className="text-4xl font-bold font-display mb-2">$150<span className="text-lg text-zinc-500 font-normal">/hr</span></div>
                  <p className="text-zinc-300 mb-8 min-h-[48px] text-sm leading-relaxed opacity-80">Perfect for quick troubleshooting, code review, methodology checks, or study design advice.</p>
                  <button className="w-full py-3.5 rounded-xl border border-zinc-600 hover:bg-white hover:text-black hover:border-white transition-all font-semibold text-sm">Book Now</button>
              </div>
              {/* Project */}
              <div className="reveal-text p-8 rounded-2xl bg-gradient-to-b from-indigo-900/40 to-zinc-800 dark:to-zinc-900 border border-indigo-500/30 hover:border-indigo-500/50 transition-all relative transform md:-translate-y-4 shadow-xl">
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Most Popular</div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300"><Briefcase size={20} /></div>
                    <span className="text-indigo-300 text-sm font-mono uppercase tracking-widest">Project Based</span>
                  </div>
                  <div className="text-4xl font-bold font-display mb-2">Custom</div>
                  <p className="text-zinc-300 mb-8 min-h-[48px] text-sm leading-relaxed opacity-80">Full-service analysis for a specific manuscript or thesis chapter. Fixed price, unlimited revisions.</p>
                  <button className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-900/50 transition-all text-sm">Get Quote</button>
              </div>
              {/* Retainer */}
              <div className="reveal-text p-8 rounded-2xl bg-zinc-800 dark:bg-zinc-900 border border-zinc-700/50 hover:bg-zinc-700/80 transition-all group">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 rounded-lg bg-zinc-700 text-zinc-300 group-hover:bg-zinc-600 group-hover:text-white transition-colors"><Zap size={20} /></div>
                    <span className="text-zinc-400 text-sm font-mono uppercase tracking-widest">Retainer</span>
                  </div>
                  <div className="text-4xl font-bold font-display mb-2">$2k+<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
                  <p className="text-zinc-300 mb-8 min-h-[48px] text-sm leading-relaxed opacity-80">Ongoing support for labs and research groups. Priority turnaround and dedicated analyst.</p>
                  <button className="w-full py-3.5 rounded-xl border border-zinc-600 hover:bg-white hover:text-black hover:border-white transition-all font-semibold text-sm">Contact Us</button>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="max-w-3xl mx-auto">
           <h2 className="reveal-text text-3xl font-bold font-display text-zinc-900 dark:text-white mb-12 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
              {[
                 { q: "How do you ensure data confidentiality?", a: "We sign strict NDAs before receiving any data. All files are stored on encrypted, compliant servers and are permanently deleted 30 days after project completion." },
                 { q: "Can you help with reviewer comments?", a: "Absolutely. If you receive feedback from a journal or committee, we assist in running additional analyses and drafting the rebuttal letter." },
                 { q: "What format should my data be in?", a: "We accept Excel (.xlsx), CSV, SPSS (.sav), and various other formats. If your data is on paper, we also offer digitization services." },
                 { q: "Do you offer rush services?", a: "Yes, we have an expedited track for urgent deadlines (under 48 hours) for an additional fee." }
              ].map((faq, i) => (
                 <div key={i} className="reveal-text group border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center">
                       <h3 className="font-semibold text-zinc-900 dark:text-white">{faq.q}</h3>
                       <ChevronDown size={16} className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                    </div>
                    <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed hidden group-hover:block animate-in slide-in-from-top-2 fade-in duration-300">
                       {faq.a}
                    </p>
                 </div>
              ))}
           </div>
           <div className="mt-12 text-center">
              <p className="text-zinc-500 dark:text-zinc-400 mb-6">Still have questions?</p>
              <button className="btn-lyra-primary px-8 py-3">Contact Support</button>
           </div>
        </Section>
      </div>
    </div>
  );
};