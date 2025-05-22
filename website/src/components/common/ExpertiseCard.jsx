import React from 'react';
import * as LucideIcons from 'lucide-react';

export const ExpertiseCard = ({ title, icon, description, color }) => {
  const Icon = LucideIcons[icon];
  
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    green: "from-green-500 to-green-600",
    yellow: "from-yellow-500 to-yellow-600"
  };
  
  return (
    <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
      <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-lg mb-4 flex items-center justify-center text-white shadow-md`}>
        <Icon size={28} />
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">
        {description}
      </p>
    </div>
  );
};