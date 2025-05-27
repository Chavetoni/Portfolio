/*
====================================================================================================
File: src/components/layout/Footer.jsx (Update existing)
Description: Main site footer.
====================================================================================================
*/
import React from 'react';
import { FOOTER_LINKS, HERO_INFO } from '../../data/portfolioData.jsx'; // Adjust path

const SiteFooter = React.memo(({ scrollToSection }) => {
 return (
    <footer aria-label="Site Footer" className="py-10 border-t border-black/20 text-center">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {HERO_INFO.name} Garcia Jr. All rights reserved.
          </div>
          <nav aria-label="Footer Navigation">
            <ul className="flex gap-4 md:gap-6">
              {FOOTER_LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={`#${link.sectionId}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.sectionId); }}
                    className="text-gray-500 hover:text-blue-300 transition-colors text-sm focus:outline-none focus-visible:underline focus-visible:text-blue-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-xs text-gray-600">
          Built with React & Tailwind CSS &bull; Crafted with passion and coffee <span role="img" aria-label="coffee emoji">☕</span>
        </div>
      </div>
    </footer>
  );
});
SiteFooter.displayName = 'SiteFooter';
export default SiteFooter;