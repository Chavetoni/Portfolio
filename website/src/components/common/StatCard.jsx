/*
====================================================================================================
File: src/components/common/StatCard.jsx (New)
Description: Simple card for displaying an icon and text (used in About Me).
====================================================================================================
*/
import React from 'react';

const StatCard = React.memo(({ icon, text }) => (
 <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg border-white/5">
    {icon}
    <span className="text-gray-400 text-sm">{text}</span>
  </div>
));
StatCard.displayName = 'StatCard';
export default StatCard;
