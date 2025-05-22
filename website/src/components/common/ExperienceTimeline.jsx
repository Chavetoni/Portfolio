import React from 'react';

export const ExperienceTimeline = ({ items }) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-blue-400 group">
          <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-500 border-2 border-gray-800 transition-all duration-300 group-hover:bg-purple-500 group-hover:scale-125"></div>
          <div className="mb-1 text-sm text-blue-300 font-semibold">{item.period}</div>
          <div className="font-bold text-lg">{item.title}</div>
          <div className="text-sm text-gray-400">{item.company} {item.location && `| ${item.location}`}</div>
          {item.description && (
            <p className="mt-2 text-gray-300 text-sm">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};