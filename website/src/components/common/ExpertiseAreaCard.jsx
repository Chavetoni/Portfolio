/*
====================================================================================================
File: src/components/common/ExpertiseAreaCard.jsx (Replaces your old ExpertiseCard.jsx)
Description: Displays a core competency.
====================================================================================================
*/
import React from 'react';
import AnimatedCard from './AnimatedCard'; // Ensure correct path

const ExpertiseAreaCard = React.memo(({ title, icon, colorClasses, description, index }) => (
  <AnimatedCard delay={index * 100} className="group relative bg-black/20 backdrop-blur-lg rounded-xl p-6 border-white/5 hover:bg-black/30 transition-all shadow-lg h-full flex flex-col">
    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${colorClasses.bgGradient} flex items-center justify-center p-4 mb-4 group-hover:scale-110 transition-transform duration-300 text-white self-start`}>
      {icon}
    </div>
    <h4 className={`text-xl font-semibold mb-2 ${colorClasses.text || 'text-white'}`}>{title}</h4>
    <p className="text-gray-400 text-sm flex-grow">{description}</p>
  </AnimatedCard>
));
ExpertiseAreaCard.displayName = 'ExpertiseAreaCard';
export default ExpertiseAreaCard;
