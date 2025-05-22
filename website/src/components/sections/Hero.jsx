import React from 'react';
import { ChevronDown, Github } from 'lucide-react';
import { Button } from '../common/Button';
import { socialLinks } from '../../data/socialLinks';

export const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-24 relative overflow-hidden">
      {/* Background animated gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 opacity-70"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-purple-600 rounded-full opacity-20 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600 rounded-full opacity-20 filter blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center relative z-10">
        {/* Text Content */}
        <div className="md:w-3/5 lg:w-1/2 md:pr-8 mt-12 md:mt-0 text-center md:text-left">
          <div className="space-y-4 md:space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Daniel Garcia Jr.</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mt-2 md:mt-4 text-gray-300 font-medium">Computer Scientist & Developer</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
              I develop web applications and AI solutions with a focus on intuitive user experiences.
              Passionate about creating technology that makes a difference.
            </p>
            <div className="pt-4 md:pt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="primary"
                size="md"
              >
                Contact Me
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="secondary"
                size="md"
              >
                View Projects
              </Button>
            </div>
            <div className="pt-6 md:pt-8 flex items-center space-x-6 justify-center md:justify-start">
              {socialLinks.map((link, index) => {
                const Icon = link.icon === 'Github' ? Github : 
                  // For LinkedIn, we need to use an SVG since it's not exported directly by lucide-react
                  () => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  );
                
                return (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`${link.name} Profile`} 
                    className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
                  >
                    <Icon size={28} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-2/5 lg:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500/70 shadow-2xl shadow-blue-600/40 transform transition-transform duration-500 hover:scale-105 hover:shadow-purple-500/50">
            <img
              src="https://placehold.co/400x400/7dd3fc/1e293b?text=DGJ&font=inter"
              alt="Daniel Garcia Jr."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <button 
          onClick={() => scrollToSection('about')} 
          aria-label="Scroll to about section" 
          className="text-white animate-bounce p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};