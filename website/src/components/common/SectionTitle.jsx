/*
====================================================================================================
File: src/components/common/SectionTitle.jsx (Update your SectionHeading.jsx)
Description: Standardized component for section titles.
====================================================================================================
*/
import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation'; // Correct path

const SectionTitle = React.memo(({ title, subtitle, id }) => {
  const [setRef, isVisible] = useScrollAnimation();
  return (
    <div ref={setRef} className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h2 id={id} className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h2>
      {subtitle && <p className="text-gray-300 max-w-2xl mx-auto text-lg">{subtitle}</p>}
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-6" />
    </div>
  );
});
SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;
