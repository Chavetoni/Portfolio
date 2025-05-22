import React from 'react';
import * as LucideIcons from 'lucide-react';

export const ContactItem = ({ type, value, url, icon }) => {
  const Icon = LucideIcons[icon];
  
  return (
    <div className="flex items-start space-x-4 group">
      <div className="mt-1 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} aria-hidden="true" />
      </div>
      <div>
        <h4 className="text-lg sm:text-xl font-semibold text-gray-100">{type}</h4>
        <a 
          href={url} 
          target={url.startsWith('http') ? "_blank" : undefined}
          rel={url.startsWith('http') ? "noopener noreferrer" : undefined}
          className="text-blue-300 hover:text-blue-200 transition-colors text-base sm:text-lg break-all"
        >
          {value}
        </a>
      </div>
    </div>
  );
};