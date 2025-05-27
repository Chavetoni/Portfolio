/*
====================================================================================================
File: src/components/sections/Hero.jsx (Update existing)
Description: Hero section of the portfolio.
====================================================================================================
*/
import React from 'react';
import ParticleField from '../common/ParticleField';
import AnimatedTextCharacter from '../common/AnimatedTextCharacter';
import DynamicGradientText from '../common/DynamicGradientText';
import AnimatedCard from '../common/AnimatedCard';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { HERO_INFO, SOCIAL_LINKS } from '../../data/portfolioData.jsx'; // Adjust path

// Pass heroRef from App.jsx to this component for parallax effect
const HeroSection = ({ scrollToSection, heroRef }) => {
  return (
    <section id="home" aria-labelledby="hero-main-title" className="min-h-screen relative overflow-hidden flex items-center justify-center text-center md:text-left pt-20 md:pt-0">
      <ParticleField />
      <div aria-hidden="true" className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse -z-10" />
      <div aria-hidden="true" className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-2000 -z-10" />

      <div ref={heroRef} className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-1 mt-8 md:mt-0">
              <h1 id="hero-main-title" className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                <AnimatedTextCharacter
                  text={HERO_INFO.greeting}
                  delay={100}
                  stagger={50}
                  className="text-white"
                  as="div"
                  animationOptions={{ threshold: 0.01, triggerOnce: true }}
                />
                <AnimatedTextCharacter
                  text={
                    <span className="relative inline-block">
                      <DynamicGradientText
                        text={HERO_INFO.name}
                        initialColors={['#a855f7', '#ec4899', '#f97316']}
                        hoverColors={['#f97316', '#d946ef', '#a855f7']}
                        className="inline-block"
                      />
                      <span aria-hidden="true" className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full motion-safe:animate-pulse" />
                    </span>
                  }
                  delay={450 + (HERO_INFO.greeting.length * 50)}
                  className="mt-1 md:mt-2"
                  as="div"
                  animationOptions={{ threshold: 0.01, triggerOnce: true }}
                />
                <AnimatedTextCharacter
                  text={HERO_INFO.title}
                  delay={950 + (HERO_INFO.greeting.length * 50)}
                  stagger={30}
                  className="block text-2xl md:text-3xl text-gray-300 mt-3 md:mt-4"
                  as="p"
                  animationOptions={{ threshold: 0.01, triggerOnce: true }}
                />
              </h1>
              <AnimatedTextCharacter
                text={HERO_INFO.subtitle}
                delay={1850 + (HERO_INFO.greeting.length * 50)}
                stagger={15}
                className="block text-lg text-gray-400 leading-relaxed max-w-xl mt-4"
                as="p"
                animationOptions={{ threshold: 0.01, triggerOnce: true }}
              />
            </div>
            <AnimatedCard delay={2400 + (HERO_INFO.greeting.length * 50)} className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="cta-button group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-95 active:shadow-md"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="cta-button-secondary px-8 py-4 border-2 border-gray-500 rounded-full font-medium text-gray-300 hover:bg-black/20 hover:border-gray-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-95 active:bg-black/10"
              >
                View Projects
              </button>
            </AnimatedCard>
            <AnimatedCard delay={2600 + (HERO_INFO.greeting.length * 50)} className="flex gap-6 pt-4 justify-center md:justify-start">
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${HERO_INFO.name}'s ${link.label}`}
                  className="interactive-icon-button p-3 rounded-full bg-black/20 border-black/30 hover:bg-black/30 hover:scale-110 transition-all text-gray-400 hover:text-white active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  {link.icon}
                </a>
              ))}
            </AnimatedCard>
          </div>
          <AnimatedCard delay={500} className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto group">
              <div aria-hidden="true" className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-slow-ping opacity-75 transition-opacity" />
              <div aria-hidden="true" className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-slow-ping animation-delay-slow-ping-1200 opacity-75 transition-opacity" />
              <div className="relative rounded-full overflow-hidden border-4 border-black/30 shadow-2xl aspect-square">
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
                <img
                  src={HERO_INFO.profileImage} // Make sure this path is correct or import the image
                  alt={`${HERO_INFO.name}'s profile picture`}
                  onError={(e) => { e.target.onerror = null; e.target.src = HERO_INFO.profilePlaceholder; }}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full hover:bg-black/20 transition-colors motion-safe:animate-bounce text-gray-400 z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};
export default HeroSection;