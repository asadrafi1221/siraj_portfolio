import React from 'react';
import { Section } from './Section';
import { GraduationCap, Zap, Lock, Clock, CheckCircle2, Play, Cpu, Heart, Lightbulb, Users, User } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-full">
      {/* Header */}
      <div className="relative py-32 px-6 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-50/50 dark:bg-zinc-900/50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/5 dark:bg-white/10 border border-zinc-900/10 dark:border-white/10 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-6 backdrop-blur-sm">
             Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display text-zinc-900 dark:text-white tracking-tight">About Us</h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            We are a team of PhD-level analysts providing the backbone for high-impact research. We believe that behind every dataset is a story waiting to be told with precision.
          </p>
        </div>
      </div>

      {/* Our Philosophy */}
      <Section className="py-24 px-6 border-b border-zinc-100 dark:border-zinc-800">
         <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="reveal-text text-3xl font-bold font-display text-zinc-900 dark:text-white mb-6">More Than Just Numbers</h2>
                  <div className="reveal-text space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-lg">
                     <p>
                        Statistical analysis is often viewed as a cold, mechanical process. We see it differently. To us, statistics is the language of scientific truth. It is the bridge between a hunch and a breakthrough.
                     </p>
                     <p>
                        Founded in 2020 by a group of former academic researchers, our agency was born out of frustration with the lack of transparent, high-quality statistical support available to PhD candidates and independent researchers.
                     </p>
                     <p>
                        We don't just email you a spreadsheet. We partner with you to ensure you understand the <em>why</em> and <em>how</em> of your results, empowering you to defend your research with confidence.
                     </p>
                  </div>
               </div>
               <div className="reveal-text relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-700 shadow-xl">
                     <h3 className="text-xl font-bold font-display mb-6 text-zinc-900 dark:text-white">Our Principles</h3>
                     <ul className="space-y-4">
                        {[
                           "Transparency in methodology",
                           " reproducibility of results",
                           "Clarity in communication",
                           "Ethical data handling"
                        ].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                              <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white">
                                 <CheckCircle2 size={14} />
                              </div>
                              <span className="font-medium">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* Leadership Team */}
      <Section className="py-24 px-6 bg-white dark:bg-zinc-950">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="reveal-text text-3xl font-bold font-display text-zinc-900 dark:text-white mb-4">Leadership Team</h2>
               <p className="reveal-text text-zinc-500 dark:text-zinc-400">Experts in biostatistics, econometrics, and data science.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
               {[
                  { name: "Dr. Sarah Jenkins", role: "Head of Statistics", bio: "Former Lead Biostatistician at Mayo Clinic. Expert in survival analysis.", bg: "bg-indigo-50 dark:bg-indigo-900/30", text: "text-indigo-600 dark:text-indigo-400" },
                  { name: "James Chen, PhD", role: "Technical Director", bio: "Data Scientist with 10+ years in Python automation and machine learning.", bg: "bg-emerald-50 dark:bg-emerald-900/30", text: "text-emerald-600 dark:text-emerald-400" },
                  { name: "Dr. Emily Rostova", role: "Research Lead", bio: "Specializes in psychometrics and survey design for social sciences.", bg: "bg-amber-50 dark:bg-amber-900/30", text: "text-amber-600 dark:text-amber-400" },
                  { name: "Marcus Thorne", role: "Client Success", bio: "Ensures every project meets our rigorous quality and timeline standards.", bg: "bg-zinc-50 dark:bg-zinc-900", text: "text-zinc-600 dark:text-zinc-300" },
               ].map((member, i) => (
                  <div key={i} className="reveal-text group p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lyra transition-all text-center">
                     <div className={`w-20 h-20 mx-auto rounded-full ${member.bg} ${member.text} flex items-center justify-center mb-6`}>
                        <User size={32} />
                     </div>
                     <h3 className="font-bold text-lg font-display text-zinc-900 dark:text-white">{member.name}</h3>
                     <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">{member.role}</div>
                     <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">{member.bio}</p>
                  </div>
               ))}
            </div>
         </div>
      </Section>

      {/* Why Partner With Us */}
      <Section className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="reveal-text text-3xl font-bold mb-4 font-display text-zinc-900 dark:text-white">Why Partner With Us?</h2>
            <p className="reveal-text text-zinc-500 dark:text-zinc-400">We combine academic rigor with industry speed.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg overflow-hidden">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "PhD-Level Expertise",
                desc: "Your project is handled by seasoned statisticians with deep experience in academia and industry."
              },
              {
                icon: <Zap size={24} />,
                title: "Human-Centric",
                desc: "We don't just 'run the numbers.' We provide 1-on-1 consultations to ensure you understand every result."
              },
              {
                icon: <Lock size={24} />,
                title: "Confidentiality",
                desc: "Your raw data and intellectual property are protected by strict non-disclosure protocols."
              },
              {
                icon: <Clock size={24} />,
                title: "Rapid Turnaround",
                desc: "We respect your deadlines, offering expedited services for time-sensitive submissions."
              }
            ].map((item, i) => (
              <div key={i} className="reveal-text bg-white dark:bg-zinc-950 p-10 hover:bg-zinc-50/50 dark:hover:bg-zinc-900 transition-colors h-full flex flex-col justify-between group">
                <div>
                   <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center text-zinc-900 dark:text-white mb-8 group-hover:scale-110 transition-transform duration-300">
                     {item.icon}
                   </div>
                   <h3 className="font-bold text-xl mb-3 font-display text-zinc-900 dark:text-white">{item.title}</h3>
                   <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <button className="btn-lyra-ghost pl-0 mt-10 text-xs uppercase tracking-wider opacity-60 group-hover:opacity-100">
                   Learn more <Play size={8} fill="currentColor" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="py-24 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="mb-12">
               <h2 className="reveal-text text-3xl font-bold font-display text-zinc-900 dark:text-white">Core Values</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="reveal-text p-8 bg-zinc-900 dark:bg-black text-white rounded-3xl shadow-xl shadow-zinc-200/50 dark:shadow-none relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:scale-150"></div>
                  <Heart className="w-10 h-10 mb-6 text-white" />
                  <h3 className="text-xl font-bold font-display mb-3">Integrity First</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">We never manipulate data to achieve a desired p-value. We report what the data truly says, ensuring your research stands up to scrutiny.</p>
               </div>
               <div className="reveal-text p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:shadow-lg transition-all group">
                  <Lightbulb className="w-10 h-10 mb-6 text-zinc-900 dark:text-white" />
                  <h3 className="text-xl font-bold font-display mb-3 text-zinc-900 dark:text-white">Curiosity</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">We dig deeper. If a result looks odd, we investigate. We treat your data with the same curiosity we would treat our own.</p>
               </div>
               <div className="reveal-text p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:shadow-lg transition-all group">
                  <Users className="w-10 h-10 mb-6 text-zinc-900 dark:text-white" />
                  <h3 className="text-xl font-bold font-display mb-3 text-zinc-900 dark:text-white">Collaboration</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">We are not a black box service. We work alongside you, explaining our methods and ensuring you feel ownership over the analysis.</p>
               </div>
            </div>
         </div>
      </Section>

      {/* Software Tools */}
      <Section className="py-24 px-6 bg-zinc-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4 text-zinc-400">
                <Cpu size={20} />
                <span className="text-sm font-mono uppercase tracking-widest">Technology</span>
              </div>
              <h2 className="reveal-text text-4xl font-bold font-display">Our Tool Stack</h2>
            </div>
            <p className="reveal-text text-zinc-400 max-w-md text-sm leading-relaxed mt-4 md:mt-0">
              We utilize industry-leading software to ensure precision and compatibility with your workflow.
            </p>
          </div>
          
          {/* Boxy Grid for Tools */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-zinc-800 border border-zinc-800">
            {['Excel', 'Power BI', 'Python', 'R Language', 'SPSS', 'Stata', 'E-views'].map((tool, i) => (
              <div key={i} className="reveal-text flex flex-col items-center justify-center p-8 bg-zinc-900 hover:bg-zinc-800 transition-colors group aspect-square">
                 <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-emerald-400 mb-4 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>
                 <span className="font-medium text-sm text-center font-display tracking-tight text-zinc-300 group-hover:text-white transition-colors">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Advanced Research */}
      <Section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="grid md:grid-cols-2 gap-20 items-center">
             <div className="order-2 md:order-1">
               <h2 className="reveal-text text-3xl font-bold mb-8 font-display text-zinc-900 dark:text-white">Advanced Statistical Research</h2>
               <div className="space-y-8">
                 <p className="reveal-text text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg font-light">
                   Our PhD-level analysts provide the backbone for high-impact research, ensuring every P-value and correlation is mathematically sound. We don't just process data; we interpret it in the context of your specific field.
                 </p>
                 <ul className="space-y-4">
                    <li className="reveal-text flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
                      <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="font-medium">Core Analysis (ANOVA, Regression)</span>
                    </li>
                    <li className="reveal-text flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
                      <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="font-medium">Structural Equation Modeling (SEM)</span>
                    </li>
                    <li className="reveal-text flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
                      <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="font-medium">Biostatistics & Clinical Trials</span>
                    </li>
                 </ul>
                 <div className="reveal-text pt-8">
                    <button className="btn-lyra-primary px-8 py-3">Start Your Research</button>
                 </div>
               </div>
             </div>
             <div className="order-1 md:order-2 relative h-[500px] bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200 dark:border-zinc-800 rounded-none md:rounded-3xl">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-zinc-300/50 dark:text-zinc-800 font-display text-6xl font-black opacity-20 -rotate-90 md:rotate-0 tracking-tighter">DATA<br/>SCIENCE</div>
                </div>
                {/* Decorative Gradients */}
                <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen"></div>
                <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen"></div>
             </div>
           </div>
        </div>
      </Section>
    </div>
  );
};