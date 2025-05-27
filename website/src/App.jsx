import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// Import Global Styles
import GlobalStyles from './components/common/GlobalStyles'; // New component

// Import Layout Components
import SiteHeader from './components/layout/Header'; // Updated
import SiteFooter from './components/layout/Footer'; // Updated

// Import Section Components
import HeroSection from './components/sections/Hero';     // Updated
import AboutSection from './components/sections/About';   // Updated
import SkillsSection from './components/sections/Skills'; // Updated
import ProjectsSection from './components/sections/Projects'; // Updated
import ContactSection from './components/sections/Contact'; // Updated

// Import Data (assuming data is consolidated or imported as needed by sections)
// For simplicity in this App.jsx, sections will import their own data.
// Alternatively, you could import all data here and pass it down.
import { NAV_LINKS } from './data/portfolioData'; // Example: if NAV_LINKS are needed directly in App

const PortfolioApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(NAV_LINKS[0]?.id || 'home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  // activeProjectCategory state will be managed within ProjectsSection or passed down if needed globally

  const heroRef = useRef(null); // For parallax, will be used by HeroSection

  // Effect to set dark mode on initial load
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  }, []);

  // Effect for handling scroll events (header style, parallax, active section)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      if (heroRef.current) { // heroRef will be set by the HeroSection component
        heroRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }

      const sectionOffset = window.innerHeight * 0.5;
      let currentSectionId = activeSection;
      for (const link of NAV_LINKS) {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= sectionOffset && rect.bottom >= sectionOffset) {
            currentSectionId = element.id;
            break;
          }
        }
      }
      if (window.innerHeight + Math.ceil(window.scrollY) >= document.body.offsetHeight - 100) {
         currentSectionId = NAV_LINKS[NAV_LINKS.length -1]?.id || currentSectionId;
      }
      if (activeSection !== currentSectionId) {
        setActiveSection(currentSectionId);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, NAV_LINKS]); // Added NAV_LINKS as dependency

  // Effect to track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Effect to simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  if (isLoading) {
    // You can create a separate Loader component or keep it simple here
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[100]" aria-live="polite" aria-busy="true">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Assuming Terminal icon is available or use a simple div */}
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 animate-pulse lucide lucide-terminal"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
          </div>
        </div>
        <p className="sr-only">Loading portfolio...</p>
      </div>
    );
  }

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen transition-colors duration-500">
        <div className="bg-gradient-to-br from-black via-blue-950/30 to-black text-gray-200 relative selection:bg-blue-500 selection:text-white">
          <div
            aria-hidden="true"
            className="fixed w-8 h-8 bg-blue-400/10 rounded-full pointer-events-none z-[99] transition-transform duration-100 ease-out blur-xl"
            style={{
              transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${scrolled ? 0.8 : 1.2})`,
              willChange: 'transform',
            }}
          />

          <SiteHeader
            scrolled={scrolled}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />

          <main id="main-content" tabIndex={-1}>
            <HeroSection scrollToSection={scrollToSection} heroRef={heroRef} />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection scrollToSection={scrollToSection} />
          </main>

          <SiteFooter scrollToSection={scrollToSection} />
        </div>
      </div>
    </>
  );
};

export default PortfolioApp;