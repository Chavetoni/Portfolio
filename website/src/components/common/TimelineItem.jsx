/*
====================================================================================================
File: src/components/common/TimelineItem.jsx (New, replaces ExperienceTimeline.jsx logic)
Description: Displays an item in the experience timeline.
====================================================================================================
*/
import React from 'react';
import AnimatedCard from './AnimatedCard'; // Ensure correct path

const TimelineItem = React.memo(({ item, isLast, index }) => (
  <AnimatedCard delay={index * 100} as="li">
    <div className="relative pl-8 pb-8 group">
      <div className={`absolute left-0 top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 ${isLast ? 'h-2.5' : 'h-full to-blue-500'}`} aria-hidden="true" />
      <div className="absolute left-[-4.5px] top-0.5 w-2.5 h-2.5 bg-blue-500 rounded-full ring-4 ring-black group-hover:scale-125 transition-transform duration-300" aria-hidden="true" />
      <div className="bg-black/20 rounded-xl p-6 ml-4 border-white/5 hover:bg-black/30 transition-all shadow-md">
        <div className="text-sm text-blue-400 mb-1 font-medium">{item.year}</div>
        <h4 className="text-xl font-semibold mb-1 text-white">{item.title}</h4>
        <div className="text-gray-500 mb-2">{item.company}</div>
        <p className="text-gray-400 text-sm">{item.description}</p>
      </div>
    </div>
  </AnimatedCard>
));
TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
