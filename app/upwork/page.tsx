"use client";

import React, { useState } from "react";
import { PageRoute } from "@/types";
import { Star, MapPin, ShieldCheck, Trophy, Award, Play } from "lucide-react";

interface UpworkProps {
  onNavigate: (page: PageRoute) => void;
}

const Upwork: React.FC<UpworkProps> = () => {
  const [activeTab, setActiveTab] = useState<"completed" | "progress">(
    "completed"
  );
  const [showFullBio, setShowFullBio] = useState(false);

  const bioText = `I am a data analyst and econometrics specialist with extensive experience in analyzing complex data sets and translating them into meaningful insights that drive smarter decisions. My expertise includes data preparation, cleaning, transformation, and interpretation using tools such as R, Python, and Stata. Whether it’s economic data analysis, survey results, or structured datasets, I ensure every data point contributes to actionable and accurate outcomes. I focus on clear data visualization, statistical accuracy, and insightful reporting that makes even the most complex information easy to understand.

With a strong background in econometrics and applied statistics, I have worked on regression modeling, time series analysis, and econometric techniques. My work often involves building and validating hedonic pricing models, performing OLS regression, and conducting empirical studies in economics and related disciplines. I leverage statistical and econometric software to deliver precise, data-driven solutions that support effective decision-making.

I also integrate traditional econometric methods with modern AI and machine learning approaches, bridging technical depth with innovation. My experience includes feature engineering, model validation, and predictive analysis, applying methods such as Bayesian learning, MCMC, and supervised machine learning for forecasting and optimization. Whether it’s predicting house prices, modeling consumer behavior, or performing counterfactual analysis, I ensure every model is robust, interpretable, and aligned with your goals.

In addition to analytics, I provide academic support and tutoring in Statistics, Economics, and Econometrics. I’ve guided university students and professionals in understanding complex quantitative concepts, tackling problem sets, and completing research projects. My approach emphasizes clarity, patience, and practical understanding, helping learners gain confidence in applying data-driven methods. I also assist with literature reviews, academic writing, and thesis structuring to meet high academic standards.

My experience extends to research assistance and quantitative academic editing. I help cross-reference theses, format manuscripts, and proofread technical sections to ensure accuracy and consistency. I have collaborated on systematic reviews, meta-analyses, and empirical research projects, maintaining precision, adherence to citation styles, and academic integrity in every document.

To improve efficiency, I also build automation scripts and workflows for data processing and analysis. From developing R or Python scripts to handle multiple CSV files to automating summary reports and calculations, I focus on saving time without compromising accuracy. I create formulas, predictive models, and reproducible workflows that simplify recurring analytical tasks and improve reliability.`;

  const jobs = [
    {
      title:
        "Statistical Insight & Report Specialist for Data Analysis Project",
      rating: 5.0,
      dates: "Jul 18, 2025 - Jul 18, 2025",
      earnings: "$10.00",
      type: "Fixed price",
      feedback:
        "Nice to work with Siraj. The work was impressively fast, thoroughly executed, and conceptually sound. Everything was delivered with clarity and completeness—great attention to detail and efficiency throughout.",
    },
    {
      title: "📊 Professional Data Analysis Using Stata",
      rating: 5.0,
      dates: "Nov 5, 2024 - Jun 20, 2025",
      earnings: "$70.00",
      type: "Fixed price",
      feedback:
        "Siraj exceeded my expectations with his exceptional expertise in data analysis. His attention to detail, accuracy, and ability to meet tight deadlines were awe-inspiring.",
    },
    {
      title: "HLM Analysis - CK, TGFU",
      rating: 4.8,
      dates: "Nov 15, 2024 - Feb 20, 2025",
      earnings: "$150.00",
      type: "Fixed price",
      feedback: null,
    },
    {
      title: "PowerPoint Presentation Designer for Online Course",
      rating: 4.6,
      dates: "Dec 21, 2024 - Dec 28, 2024",
      earnings: "$50.00",
      type: "Fixed price",
      feedback:
        "Siraj was easy to communicate with and tries his best to accommodate client's needs",
    },
    {
      title: "R code Poisson Model assistance",
      rating: 5.0,
      dates: "Dec 15, 2024 - Dec 23, 2024",
      earnings: "$433.33",
      type: "$25.00 /hr",
      hours: "17 hours",
      feedback:
        "Siraj answered all my questions completely and quickly. He was very helpful in creating Poisson models.",
    },
    {
      title: "Navigating Challenges in Linear Regression Analysis",
      rating: null,
      dates: "Mar 5, 2024 - Dec 22, 2024",
      earnings: "$190.00",
      type: "$15.00 /hr",
      hours: "13 hours",
      feedback: "No feedback given",
    },
    {
      title: "Branding PPT",
      rating: 4.0,
      dates: "Nov 21, 2024 - Dec 5, 2024",
      earnings: "$46.00",
      type: "$12.00 /hr",
      hours: "4 hours",
      feedback: null,
    },
    {
      title: "Data Visualization Specialist (R & PowerPoint)",
      rating: 5.0,
      dates: "Nov 10, 2024 - Nov 12, 2024",
      earnings: "$100.00",
      type: "Fixed price",
      feedback:
        "Siraj is a highly skilled Data Visualization Specialist with a deep understanding of R and PowerPoint. His ability to transform complex data into insightful visualizations is truly impressive.",
    },
  ];

  const inProgressJobs = [
    {
      title: "Analyzing the Network of Collaborations between Influencers",
      dates: "Dec 23, 2025 - Present",
      type: "Fixed price",
      earnings: "$29.50 (Est)",
    },
  ];

  const employment = [
    {
      role: "Freelance Data Analyst (Excel | Power BI | Python | Tableau | SPSS)",
      company: "Upwork",
      dates: "March 2024 - Present",
      desc: "Dedicated and results-oriented freelance Data Analyst with over 6 years of experience in transforming complex data into actionable insights.",
    },
    {
      role: "Sales Data Analyst",
      company: "Comtech Telecommunications",
      dates: "February 2023 - February 2024",
      desc: "Gathered sales data, developed forecasts, and improved data cleaning processes reducing errors.",
    },
    {
      role: "Data Analyst",
      company: "Technno Inn",
      dates: "September 2020 - December 2022",
      desc: "Analyzed data to discover trends, improved data cleaning processes, and developed visualizations.",
    },
  ];

  const portfolio = [
    {
      title: "📊 Professional Data Analysis Using Stata",
      category: "Data Analysis",
    },
    {
      title: "Navigating Challenges in Linear Regression Analysis",
      category: "Statistical Modeling",
    },
    { title: "R, Econometrics Analysis", category: "Econometrics" },
  ];

  const certifications = [
    { name: "Data Visualization with R", provider: "IBM", date: "Dec 2025" },
    { name: "R for Data Science", provider: "IBM", date: "Nov 2024" },
    { name: "Data Center - CCIE", provider: "Cisco", date: "Mar 2025" },
    {
      name: "DATA ANALYTICS AND BI",
      provider: "Virtual University",
      date: "Oct 2023",
    },
    {
      name: "Fundamentals of Data Science",
      provider: "Coursera",
      date: "Dec 2022",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-background text-foreground font-sans">
      {/* Upwork Top Strip */}
      <div className="w-full bg-[#14a800] text-white text-center py-2 text-sm font-medium tracking-wide">
        Verify availability: Siraj U. is currently accepting new contracts.
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-3 space-y-8 animate-slide-up">
            {/* Profile Image & Availability */}
            <div className="relative group">
              <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-white/5 bg-white/5 max-w-[200px] mx-auto lg:mx-0">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-6xl font-serif italic text-white/20">
                  Photo
                </div>
              </div>
              <div className="absolute bottom-4 right-1/2 translate-x-12 lg:right-4 lg:translate-x-0 w-5 h-5 bg-[#14a800] rounded-full border-4 border-background"></div>
            </div>

            {/* Availability Badge */}
            <div className="bg-background border border-white/10 rounded-2xl p-4 flex items-start gap-3 shadow-lg">
              <div className="w-6 h-6 rounded-full bg-transparent border-2 border-[#14a800] flex items-center justify-center mt-1">
                <span className="text-[#14a800] text-xs font-bold">⚡</span>
              </div>
              <div>
                <div className="font-bold text-foreground">Available now</div>
                <div className="text-sm text-muted-foreground mt-1">
                  As Needed - Open to Offers
                </div>
              </div>
            </div>

            {/* Video Intro Button */}
            <a
              href="https://youtu.be/bIxYsppcQHY"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#14a800] border border-[#14a800] rounded-full px-4 py-2 text-sm font-bold justify-center hover:bg-[#14a800]/10 transition-colors w-full"
            >
              <Play className="w-4 h-4 fill-current" /> Watch Video Intro
            </a>

            {/* Stats */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-foreground">
                View profile
              </h3>

              <div className="space-y-1">
                <div className="text-muted-foreground text-sm">
                  Total Earnings
                </div>
                <div className="text-foreground font-medium">$4K+</div>
              </div>
              <div className="space-y-1">
                <div className="text-muted-foreground text-sm">Total Jobs</div>
                <div className="text-foreground font-medium">37</div>
              </div>
              <div className="space-y-1">
                <div className="text-muted-foreground text-sm">Total Hours</div>
                <div className="text-foreground font-medium">79</div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="font-bold text-lg text-foreground">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-foreground text-sm">
                    University of the Punjab
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Master of Computer Science (MSCS), Data Science
                  </div>
                  <div className="text-muted-foreground text-xs mt-1">
                    2016-2019
                  </div>
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">
                    University of the Punjab
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {`  Bachelor's degree, Commerce and Accounting`}
                  </div>
                  <div className="text-muted-foreground text-xs mt-1">
                    2016-2018
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="font-bold text-lg text-foreground">Languages</h3>
              <div>
                <div className="flex items-center gap-2">
                  <div className="font-bold text-foreground text-sm">
                    English:
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Native or Bilingual
                  </div>
                </div>
              </div>
            </div>

            {/* Verifications */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="font-bold text-lg text-foreground">
                Verifications
              </h3>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <ShieldCheck className="w-4 h-4 text-[#14a800]" /> ID: Verified
              </div>
            </div>
          </div>

          {/* MAIN COLUMN */}
          <div
            className="lg:col-span-9 space-y-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Header Info */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl font-serif font-medium text-foreground mb-2">
                  Siraj U.
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> Lahore, Pakistan – 5:56 pm
                    local time
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-2 rounded-full bg-[#14a800] text-white font-bold hover:bg-[#14a800]/90 transition-colors shadow-lg shadow-[#14a800]/20">
                  Hire
                </button>
                <button className="px-4 py-2 rounded-full border border-[#14a800] text-[#14a800] font-bold hover:bg-[#14a800]/10 transition-colors">
                  Copy Link
                </button>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
              {/* Title & Rate */}
              <div className="p-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    Econometrics & Data Analysis Expert | Statistical Modeling |
                    Research
                  </h2>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-xl font-bold text-foreground">
                    $20.00{" "}
                    <span className="text-sm font-normal text-muted-foreground">
                      /hr
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4 text-[#14a800]" />
                    <div className="h-4 w-px bg-white/20 mx-1"></div>
                    <div className="flex items-center text-[#14a800] text-sm font-bold">
                      100%{" "}
                      <span className="h-1 w-12 bg-white/20 ml-2 rounded-full overflow-hidden relative">
                        <span className="absolute left-0 top-0 bottom-0 w-full bg-[#14a800]"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="p-8 border-b border-white/10">
                <div
                  className={`text-foreground/90 leading-relaxed whitespace-pre-line relative ${
                    !showFullBio &&
                    "max-h-[200px] overflow-hidden mask-linear-fade"
                  }`}
                >
                  {bioText}
                  {!showFullBio && (
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#020410] via-[#020410]/80 to-transparent pointer-events-none"></div>
                  )}
                </div>
                <button
                  onClick={() => setShowFullBio(!showFullBio)}
                  className="mt-4 text-[#14a800] font-bold text-sm hover:underline"
                >
                  {showFullBio ? "less" : "more"}
                </button>
              </div>

              {/* Work History */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Work History
                </h3>

                {/* Tabs */}
                <div className="flex gap-8 border-b border-white/10 mb-6">
                  <button
                    onClick={() => setActiveTab("completed")}
                    className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
                      activeTab === "completed"
                        ? "text-[#14a800] border-[#14a800]"
                        : "text-muted-foreground border-transparent hover:text-foreground"
                    }`}
                  >
                    Completed jobs ({jobs.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("progress")}
                    className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
                      activeTab === "progress"
                        ? "text-[#14a800] border-[#14a800]"
                        : "text-muted-foreground border-transparent hover:text-foreground"
                    }`}
                  >
                    In progress ({inProgressJobs.length})
                  </button>
                </div>

                {/* Job List */}
                <div className="space-y-6">
                  {activeTab === "completed"
                    ? jobs.map((job, i) => (
                        <div
                          key={i}
                          className="group pb-6 border-b border-white/5 last:border-0 hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-colors"
                        >
                          <h4 className="text-[#14a800] font-bold text-base mb-2 group-hover:underline cursor-pointer">
                            {job.title}
                          </h4>
                          <div className="flex items-center gap-1 mb-2">
                            <div className="flex text-[#14a800]">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-3 h-3 ${
                                    job.rating && star <= Math.round(job.rating)
                                      ? "fill-current"
                                      : "text-muted-foreground/30"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs font-bold text-foreground ml-1">
                              {job.rating || "No feedback"}
                            </span>
                            <span className="text-xs text-muted-foreground mx-1">
                              •
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {job.dates}
                            </span>
                          </div>
                          {job.feedback && (
                            <p className="text-sm text-foreground/80 italic mb-3">
                              {job.feedback}
                            </p>
                          )}
                          <div className="flex gap-6 text-xs text-foreground font-mono">
                            <div className="font-bold">{job.earnings}</div>
                            <div className="text-muted-foreground">
                              {job.type}
                            </div>
                            {job.hours && (
                              <div className="text-muted-foreground">
                                {job.hours}
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    : inProgressJobs.map((job, i) => (
                        <div
                          key={i}
                          className="pb-6 border-b border-white/5 last:border-0"
                        >
                          <h4 className="text-[#14a800] font-bold text-base mb-2">
                            {job.title}
                          </h4>
                          <div className="flex items-center gap-1 mb-2">
                            <span className="text-xs text-muted-foreground">
                              {job.dates}
                            </span>
                          </div>
                          <div className="flex gap-6 text-xs text-foreground font-mono">
                            <div>{job.earnings}</div>
                            <div className="text-muted-foreground">
                              {job.type}
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
              </div>

              {/* Portfolio Grid */}
              <div className="p-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-foreground mb-6 flex justify-between items-center">
                  Portfolio
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5">
                      <span className="text-lg">‹</span>
                    </button>
                    <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5">
                      <span className="text-lg">›</span>
                    </button>
                  </div>
                </h3>
                <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
                  {portfolio.map((item, i) => (
                    <div
                      key={i}
                      className="min-w-[250px] aspect-[4/3] bg-white/5 rounded-lg border border-white/5 hover:border-[#14a800]/50 transition-colors p-4 flex flex-col justify-end group cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="relative z-10">
                        <h4 className="font-bold text-white mb-1 group-hover:text-[#14a800] transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="p-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Statistics",
                    "Statistical Computing",
                    "Data Science",
                    "Data Visualization",
                    "Stata",
                    "IBM SPSS",
                    "Python",
                    "R",
                    "Data Cleaning",
                    "Econometrics",
                    "Tableau",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-foreground hover:bg-white/10 cursor-pointer transition-colors border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="p-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 border border-white/5 rounded-xl hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="w-12 h-12 flex-shrink-0 bg-yellow-500/10 text-yellow-500 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-sm">
                          {cert.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {cert.provider}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Issued: {cert.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Employment History */}
              <div className="p-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Employment History
                </h3>
                <div className="space-y-6">
                  {employment.map((job, i) => (
                    <div
                      key={i}
                      className="pb-6 border-b border-white/5 last:border-0 last:pb-0"
                    >
                      <h4 className="font-bold text-base text-foreground mb-1">
                        {job.role} |{" "}
                        <span className="text-[#14a800]">{job.company}</span>
                      </h4>
                      <div className="text-sm text-muted-foreground mb-2">
                        {job.dates}
                      </div>
                      <p className="text-sm text-foreground/70">{job.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Upwork;
