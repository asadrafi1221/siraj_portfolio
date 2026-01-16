import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  methodology: string;
  deliverables: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
  challenge: string;
  solution: string;
  impact: string;
  year: string;
}

export interface Testimonial {
  id: string;
  client: string;
  role: string;
  text: string;
}

export enum PageRoute {
  HOME = "/",
  SERVICES = "/services",
  ABOUT = "/about",
  PORTFOLIO = "/portfolio",
  CONTACT = "/contact",
  UPWORK = "/upwork",
}
