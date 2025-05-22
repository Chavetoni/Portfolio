import React from 'react';

export const SectionHeading = ({ title, subtitle = '' }) => {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">{title}</h2>
      <div className="w-24 h-1.5 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
      {subtitle && (
        <p className="mt-6 text-gray-300 max-w-xl mx-auto text-base sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};