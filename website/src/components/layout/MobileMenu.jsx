import React from 'react';

export const MobileMenu = ({ isOpen, activeSection, scrollToSection }) => {
  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 shadow-lg animate-fadeInDown">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`capitalize block w-full text-left py-2 px-3 rounded-md transition-colors duration-300 ${
                  activeSection === item 
                    ? 'text-blue-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                aria-current={activeSection === item ? 'page' : undefined}
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <a 
              href="Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2.5 px-4 rounded-md text-center font-medium hover:opacity-90 transition-opacity mt-2"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};