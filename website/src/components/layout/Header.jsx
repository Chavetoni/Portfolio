import React from 'react';
import { Menu, X } from 'lucide-react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { MobileMenu } from './MobileMenu';

export const Header = ({ activeSection, scrolled, isMenuOpen, toggleMenu, scrollToSection }) => {
  const { isMobile } = useWindowSize();
  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <div className="flex items-center">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer"
          >
            DG<span className="text-white">.</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6 lg:space-x-8 items-center">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`capitalize py-1 px-2 relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === item
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  aria-current={activeSection === item ? 'page' : undefined}
                >
                  {item}
                  {activeSection === item && (
                    <span className="absolute bottom-[-4px] left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
            <li>
              <a
                href="Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-md hover:bg-gray-700 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <MobileMenu
          isOpen={isMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      )}
    </header>
  );
};