import React, { useState, useEffect } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import { Route, Routes, useLocation } from "react-router-dom";
import SplashCursor from "./ReactBits/SplashCursor/SplashCursor";

export default function App() {
  const location = useLocation();
  const [isOnePage, setIsOnePage] = useState(false);

  // Update isOnePage based on current route
  useEffect(() => {
    setIsOnePage(location.pathname === '/');
  }, [location.pathname]);

  return (
    <>
      <SplashCursor />
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <main className="bg-[#020617]">
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>
          <Route path="/" element={
            <main className="bg-[#020617]">
              <Hero />
              <Skills />
              <Experience />
              <Education />
              <Projects />
              <Contact />
            </main>
          } />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
    </>
  );
}
