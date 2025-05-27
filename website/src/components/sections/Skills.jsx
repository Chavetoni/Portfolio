/*
====================================================================================================
File: src/components/sections/Skills.jsx (Update existing)
Description: Skills & Expertise section.
====================================================================================================
*/
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import SkillCategoryCard from '../common/SkillCategoryCard';
import ExpertiseAreaCard from '../common/ExpertiseAreaCard';
import { SKILLS_DATA } from '../../data/portfolioData'; // Adjust path

const SkillsSection = () => {
  return (
    <section id="skills" aria-labelledby="skills-section-title" className="py-20 md:py-28 relative overflow-hidden bg-black/30">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent -z-10" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle id="skills-section-title" title="Skills & Expertise" subtitle="A showcase of my technical capabilities and areas of focus."/>

        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-white">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SKILLS_DATA.technicalSkills.map((category, index) => (
              <SkillCategoryCard
                key={category.categoryTitle}
                categoryTitle={category.categoryTitle}
                skills={category.skills}
                colorClasses={category.colorClasses}
                index={index}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-white">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {SKILLS_DATA.expertiseAreas.map((area, index) => (
                <ExpertiseAreaCard
                  key={area.title}
                  {...area}
                  index={SKILLS_DATA.technicalSkills.length + index}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
