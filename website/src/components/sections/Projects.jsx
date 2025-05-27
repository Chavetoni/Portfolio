/*
====================================================================================================
File: src/components/sections/Projects.jsx (Update existing)
Description: Featured Projects section.
====================================================================================================
*/
import React, { useState, useMemo } from 'react';
import SectionTitle from '../common/SectionTitle';
import AnimatedCard from '../common/AnimatedCard';
import ProjectCard from '../common/ProjectCard';
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../../data/portfolioData.jsx'; // Adjust path

const ProjectsSection = () => {
  const [activeProjectCategory, setActiveProjectCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeProjectCategory === 'All') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(project => project.category === activeProjectCategory);
  }, [activeProjectCategory]);

  return (
    <section id="projects" aria-labelledby="projects-section-title" className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle id="projects-section-title" title="Featured Projects" subtitle="A selection of projects that demonstrate my skills and passion." />
          
          <AnimatedCard delay={100} className="mb-10 md:mb-12 flex flex-wrap justify-center gap-3">
            {PROJECT_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveProjectCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black/80
                  ${activeProjectCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-black/20 text-gray-300 hover:bg-black/30 hover:text-blue-300 border border-black/30'
                  }`}
                aria-pressed={activeProjectCategory === category}
              >
                {category}
              </button>
            ))}
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${activeProjectCategory}-${project.title}-${index}`}
                project={project}
                index={index}
              />
            ))}
          </div>
          {filteredProjects.length === 0 && (
               <AnimatedCard delay={0} className="text-center text-gray-400 col-span-full mt-8">
                 No projects found for "{activeProjectCategory}". Try a different category!
             </AnimatedCard>
           )}
        </div>
    </section>
  );
};
export default ProjectsSection;