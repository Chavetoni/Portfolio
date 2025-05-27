/*
====================================================================================================
File: src/components/common/ParticleField.jsx
Description: Renders floating particles for background effect.
====================================================================================================
*/
import React from 'react';

const ParticleField = React.memo(() => (
  <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 bg-blue-300/50 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${10 + Math.random() * 20}s`,
          opacity: Math.random() * 0.3 + 0.5,
        }}
      />
    ))}
  </div>
));
ParticleField.displayName = 'ParticleField';

export default ParticleField;