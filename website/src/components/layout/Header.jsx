/*
====================================================================================================
File: src/components/layout/Header.jsx (Update existing)
Description: Main site header and navigation.
====================================================================================================
*/
import React, { useEffect, useRef } from 'react';
import { Menu, X, Terminal, Download } from 'lucide-react';
import { NAV_LINKS, HERO_INFO } from '../../data/portfolioData.jsx'; // Adjust path as needed

const SiteHeader = React.memo(({ scrolled, activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      const focusableElements = headerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      const handleTabKey = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };
      
      const mobileMenuNav = document.getElementById('mobile-menu-nav');
      mobileMenuNav?.querySelector('button, a')?.focus();

      document.addEventListener('keydown', handleTabKey);
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      aria-label="Main Navigation"
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-black/10 backdrop-blur-xl shadow-lg py-3 border-b border-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection('home');}}
          className="flex items-center gap-2 group"
          aria-label="Scroll to homepage section"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 transition-opacity duration-300" aria-hidden="true"></div>
            <div className="relative bg-black/70 backdrop-blur-sm p-2 rounded-lg border border-black/20 flex items-center">
              <Terminal className="w-6 h-6 text-blue-300" />
              <span className="blinking-cursor ml-0.5 w-0.5 h-5 bg-blue-300"></span>
            </div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {HERO_INFO.name.substring(0,1).toUpperCase()}{HERO_INFO.name.substring(1,2).toUpperCase()}<span className="text-gray-300">.</span> {/* Or your preferred logo text */}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 xl:gap-2" aria-label="Desktop Navigation">
          {NAV_LINKS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              aria-current={activeSection === item.id ? "page" : undefined}
              className={`nav-link relative px-3 py-2 text-xs xl:text-sm font-medium capitalize transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md ${
                activeSection === item.id
                  ? 'text-blue-300 active-nav-link'
                  : 'text-gray-300 hover:text-blue-300'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection === item.id && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full motion-safe:animate-pulse" aria-hidden="true" />
              )}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full group-[.active-nav-link]:w-full" aria-hidden="true"></span>
            </button>
          ))}
          <div className="flex items-center gap-3 ml-3">
            <a
              href="/Resume.pdf" // Ensure Resume.pdf is in your public folder
              download="Daniel_Garcia_Jr_Resume.pdf"
              className="cta-button group relative px-4 py-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-xs font-medium shadow-lg transition-all hover:scale-105 hover:shadow-xl text-white active:scale-95 active:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Download Daniel Garcia Jr's Resume"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Resume <Download size={14} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            </a>
          </div>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-black/20 transition-colors text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu-nav"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        id="mobile-menu-nav"
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform origin-top ${
          isMenuOpen
            ? 'opacity-100 scale-y-100'
            : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        <nav className="bg-black/95 backdrop-blur-lg border-t border-black/20 p-5 space-y-1" aria-label="Mobile Navigation">
          {NAV_LINKS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-2.5 px-4 rounded-lg capitalize hover:bg-black/20 transition-colors text-gray-300 text-sm focus:outline-none focus-visible:bg-black/30 focus-visible:text-blue-300"
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Resume.pdf" // Ensure Resume.pdf is in your public folder
            download="Daniel_Garcia_Jr_Resume.pdf"
            className="block w-full text-left py-3 px-4 rounded-lg capitalize bg-blue-600 hover:bg-blue-700 transition-colors text-white flex items-center gap-2 mt-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black/95 focus-visible:ring-blue-300"
            aria-label="Download Daniel Garcia Jr's Resume"
          >
            Resume <Download size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
});
SiteHeader.displayName = 'SiteHeader';
export default SiteHeader;
