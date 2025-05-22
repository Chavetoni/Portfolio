
import React, { useState, useMemo } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from '../common/ProjectCard';
import { Button } from '../common/Button';
import { projects, projectCategories } from '../../data/projects';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    return activeCategory === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);
  
  return (
    <section id="projects" className="py-20 md:py-28 min-h-screen bg-gray-900 bg-opacity-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" />
        
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm sm:text-base rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              aria-current={activeCategory === category ? 'page' : undefined}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12 md:mt-16">
          <Button
            as="a"
            href="https://github.com/Chavetoni?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};