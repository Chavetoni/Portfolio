import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ExperienceTimeline } from '../common/ExperienceTimeline';
import { experience } from '../../data/experience';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 min-h-screen flex items-center relative bg-gray-900 bg-opacity-30">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-900 via-blue-900/80 to-transparent opacity-40 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="About Me" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Left Column: My Journey */}
          <div className="md:col-span-3 space-y-6 bg-gray-800/40 p-6 sm:p-8 rounded-xl shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              I'm a Computer Scientist with a passion for creating innovative solutions through technology.
              I currently work as an AI & Software Developer at MEG Engineers Inc., where I architect full-stack
              applications and implement AI models focused on practical business applications.
            </p>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              I have a strong grounding in both theory and practice, with a focus on web applications and
              AI applications. Skilled in Python, JavaScript, C++, and Java, I am always seeking to learn and
              integrate cutting-edge technologies into my work.
            </p>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              My ambition is to grow as a tech innovator, making significant contributions to computer science.
              I am keen to apply my diverse skills and enthusiasm in the tech industry, eagerly welcoming
              opportunities for collaboration on challenging and transformative projects.
            </p>
          </div>

          {/* Right Column: Experience & Education Timeline */}
          <div className="md:col-span-2 space-y-6 bg-gray-800/40 p-6 sm:p-8 rounded-xl shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-semibold text-purple-300 mb-4">Experience & Education</h3>
            <ExperienceTimeline items={experience} />
          </div>
        </div>
      </div>
    </section>
  );
};