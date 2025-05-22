import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const { title, description, image, tags, category, githubLink, liveLink } = project;
  
  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-500/40 transition-all duration-300 group flex flex-col h-full">
      {/* Project Image */}
      <div className="relative w-full h-52 sm:h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="text-xs px-3 py-1 bg-black/50 text-blue-300 rounded-full font-medium backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed h-24 overflow-y-auto custom-scrollbar">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2.5 py-1 bg-blue-900 bg-opacity-70 rounded-full text-gray-200 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="mt-auto pt-4 flex flex-col sm:flex-row sm:justify-between gap-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto text-sm text-center text-white bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 py-2.5 px-5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            aria-label={`View ${title} code on GitHub`}
          >
            <Github size={18} aria-hidden="true" />
            <span>View Code</span>
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto text-sm text-center text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-2.5 px-5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink size={18} aria-hidden="true" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};