import React, { useState } from 'react';
import { useScrollDetection } from './hooks/useScrollDetection';
import { useActiveSection } from './hooks/useActiveSection';

// Import layout components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Import section components
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';



const App = () => {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Use custom hooks
  const scrolled = useScrollDetection(50);
  const [activeSection, setActiveSection] = useActiveSection();

  // Function to scroll to a specific section smoothly
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); // Update active section immediately on click
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* Header/Navigation */}
      <Header 
        activeSection={activeSection}
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        scrollToSection={scrollToSection}
      />

      {/* Main Content Area */}
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Global style for custom scrollbar */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.5); /* bg-gray-700 with opacity */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(107, 114, 128, 0.7); /* bg-gray-500 with opacity */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.9); /* bg-gray-400 with opacity */
        }
        /* Firefox scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(107, 114, 128, 0.7) rgba(55, 65, 81, 0.5);
        }
      `}</style>
    </div>
  );
};

export default App;