import React from 'react';

export const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();
  const footerLinks = ['home', 'about', 'projects', 'contact'];
  
  return (
    <footer className="bg-gray-900 py-10 md:py-12 border-t border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Daniel Garcia Jr. All rights reserved.
          </div>
          <div className="flex space-x-4 sm:space-x-6">
            {footerLinks.map(item => (
              <a 
                key={item} 
                href={`#${item}`} 
                onClick={(e) => { e.preventDefault(); scrollToSection(item);}} 
                className="text-gray-400 hover:text-blue-300 transition-colors text-sm capitalize"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">
          Built with React & Tailwind CSS. Inspired by modern design.
        </p>
      </div>
    </footer>
  );
};