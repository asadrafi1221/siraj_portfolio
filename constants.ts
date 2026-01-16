import { BarChart3, TrendingUp, BrainCircuit, Server } from "lucide-react";
import { ServiceItem, PortfolioItem, Testimonial } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "predictive",
    title: "Predictive Architectures",
    description:
      "We build self-learning systems that anticipate market shifts before they appear in standard reporting.",
    features: [
      "Bayesian Inference",
      "Markov Chain Monte Carlo",
      "Time-Series Forecasting",
      "Anomaly Detection",
    ],
    icon: BrainCircuit,
    methodology:
      "Our approach moves beyond static regression. We utilize dynamic state-space models that adapt to structural breaks in real-time data.",
    deliverables: [
      "Python API Endpoint",
      "Live Grafana Dashboard",
      "Model Documentation PDF",
      "Quarterly Re-calibration",
    ],
  },
  {
    id: "econometrics",
    title: "Computational Econometrics",
    description:
      "Rigorous causal inference to separate noise from signal in complex economic systems.",
    features: [
      "Panel Data Analysis",
      "Instrumental Variables",
      "Difference-in-Differences",
      "Synthetic Controls",
    ],
    icon: TrendingUp,
    methodology:
      "We apply academic-grade rigor to business data, ensuring that identified relationships are causal, not just correlated.",
    deliverables: [
      "Causal Impact Report",
      "Stata/R Codebase",
      "Executive Summary",
      "Peer-Review Ready Paper",
    ],
  },
  {
    id: "bi",
    title: "Business Intelligence 3.0",
    description:
      "Transforming data warehouses into decision engines with automated ETL and interactive visualization.",
    features: [
      "Modern Data Stack (dbt)",
      "Power BI / Tableau",
      "SQL Warehousing",
      "Automated Alerts",
    ],
    icon: BarChart3,
    methodology:
      "We architect the 'Modern Data Stack'—decoupling storage from compute to allow for scalable, real-time analytics without the latency.",
    deliverables: [
      "Self-Service Dashboard",
      "Automated Email Reports",
      "Data Dictionary",
      "ETL Pipeline",
    ],
  },
  {
    id: "infrastructure",
    title: "Data Infrastructure",
    description:
      "Building the bedrock of intelligence. Scalable, secure, and compliant data engineering.",
    features: [
      "AWS / Azure Cloud",
      "Docker & Kubernetes",
      "PostgreSQL Optimization",
      "Data Governance",
    ],
    icon: Server,
    methodology:
      "Security and scalability are first principles. We deploy containerized microservices ensuring your infrastructure is future-proof.",
    deliverables: [
      "Cloud Architecture Map",
      "CI/CD Pipeline",
      "Security Audit",
      "API Documentation",
    ],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "01",
    title: "Global Supply Chain Optimization",
    category: "Logistics AI",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    description:
      "A reinforcement learning model to optimize container routing across 40+ ports.",
    tools: ["Python", "TensorFlow", "PostGIS", "AWS"],
    challenge:
      "The client faced a 15% inefficiency rate due to static routing tables that failed to account for weather and port congestion.",
    solution:
      "We deployed a Deep Q-Network (DQN) agent trained on 5 years of shipping data to predict delays and reroute vessels dynamically.",
    impact: "+18% Efficiency",
    year: "2024",
  },
  {
    id: "02",
    title: "Fintech Credit Risk Engine",
    category: "Financial Modeling",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description:
      "Automated credit scoring system for a neo-bank serving underbanked populations.",
    tools: ["R", "XGBoost", "Shiny", "Docker"],
    challenge:
      "Traditional FICO scores were excluding viable borrowers. The client needed a model utilizing alternative data points.",
    solution:
      "We engineered a gradient-boosted decision tree incorporating utility payments and transaction velocity to score thin-file applicants.",
    impact: "$4.2M New Loans",
    year: "2023",
  },
  {
    id: "03",
    title: "Healthcare Resource Allocation",
    category: "Predictive Analytics",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
    description:
      "Forecasting patient admission surges to optimize nursing staff schedules.",
    tools: ["Python", "Prophet", "Tableau", "SQL"],
    challenge:
      "Staffing costs were ballooning due to reliance on emergency agency nurses during unpredicted surges.",
    solution:
      "Implemented a Meta Prophet time-series model accounting for seasonality, holidays, and local flu trends.",
    impact: "-22% Overtime Cost",
    year: "2023",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    client: "Sarah Jenkins",
    role: "CTO, Nexus Logistics",
    text: "Siraj didn’t just build a dashboard; he built a central nervous system for our operations. The predictive accuracy is frighteningly good.",
  },
  {
    id: "2",
    client: "Dr. Marcus Webb",
    role: "Director, FinEdge Capital",
    text: "Rarely do you find someone who understands the math as deeply as the code. The risk model stood up to rigorous regulatory audit.",
  },
];
