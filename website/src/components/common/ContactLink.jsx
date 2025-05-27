/*
====================================================================================================
File: src/components/common/ContactLink.jsx (Replaces ContactItem.jsx)
Description: Displays a contact method with icon and link.
====================================================================================================
*/
import React from 'react';
import AnimatedCard from './AnimatedCard'; // Ensure correct path

const ContactLink = React.memo(({ icon, label, value, href, index }) => (
  <AnimatedCard delay={index * 100}>
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={`Contact via ${label}: ${value}`}
      className="flex items-center gap-4 p-4 bg-black/20 backdrop-blur-lg rounded-xl border-white/5 hover:bg-black/30 transition-all group shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
    >
      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300 text-white">
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="font-medium text-white">{value}</div>
      </div>
    </a>
  </AnimatedCard>
));
ContactLink.displayName = 'ContactLink';
export default ContactLink;
