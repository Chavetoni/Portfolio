/*
====================================================================================================
File: src/components/common/ProjectCard.jsx (Update existing)
Description: Displays a single project.
====================================================================================================
*/
import React, { useState, useRef, useCallback } from 'react';
import AnimatedCard from './AnimatedCard'; // Ensure correct path
import { Github, ExternalLink } from 'lucide-react'; // Assuming lucide-react is installed

const ProjectCard = React.memo(({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || !isHovering) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateY = (x / (rect.width / 2)) * 5;
    const rotateX = -(y / (rect.height / 2)) * 5;
    setRotate({ x: rotateX, y: rotateY });
  }, [isHovering]);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setRotate({ x: 0, y: 0 });
  }, []);

  return (
    <AnimatedCard delay={index * 150} as="article" className="h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovering ? 1.03 : 1})`,
          transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out',
        }}
        className="group relative bg-black/20 backdrop-blur-lg rounded-2xl overflow-hidden border-white/5 hover:bg-black/30 shadow-xl hover:shadow-2xl flex flex-col h-full"
      >
        <div className="relative h-52 md:h-60 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            onError={(e) => { e.target.onerror = null; e.target.src = project.placeholder; }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-10 transition-opacity duration-300`} aria-hidden="true" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-300 mb-3 text-sm leading-relaxed h-24 overflow-y-auto custom-scrollbar">
            {project.description}
          </p>
          <div className="my-4">
            <h5 className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-2">Built with:</h5>
            <div className="flex flex-wrap gap-2">
              {project.techIcons?.map(tech => (
                  <span
                    key={tech.name}
                    className="flex items-center text-xs px-2.5 py-1 bg-black/40 rounded-full text-gray-300 shadow-sm"
                    title={tech.name}
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="flex gap-4 mt-auto pt-4 border-t border-black/20">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title} on GitHub`}
              className="flex items-center gap-2 px-4 py-2 bg-black/30 rounded-lg hover:bg-black/40 hover:text-blue-300 hover:scale-105 hover:shadow-md transition-all text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Github className="w-4 h-4" /> Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition-transform shadow-md text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                <ExternalLink className="w-4 h-4" /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
});
ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;