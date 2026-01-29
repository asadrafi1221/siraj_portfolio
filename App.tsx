import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Layout } from "./components/Layout";
import { ServicesPage } from "./components/ServicesPage";
import { AboutPage } from "./components/AboutPage";
import { HomePage } from "./components/HomePage";

export type View = "home" | "services" | "about" | "chat";

function AppContent() {
  const [view, setView] = useState<View>("home");

  return (
    <Layout currentView={view} onNavigate={setView}>
      {view === "home" && <HomePage onNavigate={setView} />}
      {view === "services" && <ServicesPage />}
      {view === "about" && <AboutPage />}
    </Layout>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
