/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ClientLayout.tsx (Create this new file)
"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PageRoute } from "@/types";
import Home from "@/app/page";
import About from "@/app/about/page";
import Services from "@/app/services/page";
import Portfolio from "@/app/portfolio/page";
import Upwork from "@/app/upwork/page";
import { Footer } from "./Footer";

export default function ClientLayout({ children }: any) {
  const [currentPage, setCurrentPage] = useState<PageRoute>(PageRoute.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case PageRoute.HOME:
        return <Home onNavigate={setCurrentPage} />;
      case PageRoute.ABOUT:
        return <About onNavigate={setCurrentPage} />;
      case PageRoute.SERVICES:
        return <Services onNavigate={setCurrentPage} />;
      case PageRoute.PORTFOLIO:
        return <Portfolio onNavigate={setCurrentPage} />;
      case PageRoute.UPWORK:
        return <Upwork onNavigate={setCurrentPage} />;
      // case PageRoute.CONTACT: return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </>
  );
}
