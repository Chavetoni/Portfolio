import React from 'react';

export const SkillCard = ({ category, skills }) => {
  return (
    <div className="bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
      <h4 className="text-xl font-semibold mb-4 text-blue-400">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-blue-900 bg-opacity-70 px-3 py-1.5 rounded-full text-sm font-medium text-gray-200 transition-transform hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};