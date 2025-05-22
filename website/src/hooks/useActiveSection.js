import { useState, useEffect } from 'react';

export function useActiveSection(sections = ['home', 'about', 'skills', 'projects', 'contact'], offset = 150) {
  const [activeSection, setActiveSection] = useState(sections[0]);
  
  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is within viewport (with offset)
          if (rect.top <= offset && rect.bottom >= offset) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };
    
    // Check initial position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, offset]);
  
  return [activeSection, setActiveSection];
}