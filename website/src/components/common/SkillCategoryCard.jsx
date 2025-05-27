/*
====================================================================================================
File: src/components/common/SkillCategoryCard.jsx (Replaces your old SkillCard.jsx)
Description: Displays a category of skills.
====================================================================================================
*/
import React from 'react';
import AnimatedCard from './AnimatedCard'; // Ensure correct path

const SkillCategoryCard = React.memo(({ categoryTitle, skills, colorClasses, index }) => (
  <AnimatedCard
    delay={index * 150}
    className={`bg-black/20 backdrop-blur-lg rounded-xl p-6 border ${colorClasses.border || 'border-white/10'} hover:border-white/20 transition-all shadow-xl hover:shadow-2xl h-full`}
  >
    <h4 className={`text-xl font-semibold mb-5 ${colorClasses.text || 'text-white'}`}>{categoryTitle}</h4>
    <div className="flex flex-wrap gap-2.5">
      {skills.map((skill) => (
          <span
            key={skill.name}
            className={`flex items-center text-sm px-3 py-1.5 ${colorClasses.pillBg || 'bg-black/30'} rounded-full ${colorClasses.pillText || 'text-gray-300'} hover:text-white transition-colors cursor-default shadow-sm`}
            title={skill.name}
          >
            {skill.icon}
            {skill.name}
          </span>
        )
      )}
    </div>
  </AnimatedCard>
));
SkillCategoryCard.displayName = 'SkillCategoryCard';
export default SkillCategoryCard;