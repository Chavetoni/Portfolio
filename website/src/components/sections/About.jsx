
/*
====================================================================================================
File: src/components/sections/About.jsx (Update existing)
Description: About Me section.
====================================================================================================
*/
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import AnimatedCard from '../common/AnimatedCard';
import StatCard from '../common/StatCard';
import TimelineItem from '../common/TimelineItem';
import { Route, NotebookPenIcon, Briefcase,} from 'lucide-react';
import { ABOUT_ME } from '../../data/portfolioData.jsx'; // Adjust path

const AboutSection = () => {
  return (
    <section id="about" aria-labelledby="about-section-title"  className="py-20 md:py-28 relative bg-black/30">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle id="about-section-title" title="About Me" subtitle="A glimpse into my background, experience, and what drives me." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
         <AnimatedCard as="article" delay={0} className="lg:col-span-2 bg-black/20 backdrop-blur-lg rounded-2xl p-8 border-white/5 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300 flex items-center gap-2">
              <Route className="w-6 h-6"/> My Journey
            </h3>
            <div className="space-y-4 text-gray-400">
              {ABOUT_ME.story.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </AnimatedCard>
          <AnimatedCard as="aside" delay={100} className="bg-black/20 backdrop-blur-lg rounded-2xl p-8 border-white/5 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-purple-300 flex items-center gap-2">
              <NotebookPenIcon className="w-6 h-6"/> Quick Facts
            </h3>
            <div className="space-y-3">
              {ABOUT_ME.quickFacts.map((fact, index) => <StatCard key={index} icon={fact.icon} text={fact.text} />)}
            </div>
          </AnimatedCard>
        </div>
        <AnimatedCard as="article" className="mt-16 md:mt-20" delay={200}>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white flex items-center justify-center gap-2">
            <Briefcase className="w-6 h-6" /> Experience Timeline
          </h3>
          <ul className="max-w-3xl mx-auto">
            {ABOUT_ME.timeline.map((item, index) => (
              <TimelineItem key={index} item={item} isLast={index === ABOUT_ME.timeline.length - 1} index={index} />
            ))}
          </ul>
        </AnimatedCard>
      </div>
    </section>
  );
};
export default AboutSection;
