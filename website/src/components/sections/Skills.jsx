import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SkillCard } from '../common/SkillCard';
import { ExpertiseCard } from '../common/ExpertiseCard';
import { technicalSkills, expertiseAreas } from '../../data/skills';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 min-h-screen flex items-center bg-gray-900 bg-opacity-60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills & Expertise" />

        {/* Main container for stacked sections */}
        <div className="space-y-16 md:space-y-20">
          {/* Technical Skills Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-blue-300 text-center md:text-left">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <SkillCard 
                  key={index} 
                  category={skillGroup.category} 
                  skills={skillGroup.skills} 
                />
              ))}
            </div>
          </div>

          {/* Areas of Expertise Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-purple-300 text-center md:text-left">Areas of Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <ExpertiseCard 
                  key={index}
                  title={area.title}
                  icon={area.icon}
                  description={area.description}
                  color={area.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};