/*
====================================================================================================
File: src/components/common/DynamicGradientText.jsx
Description: Displays text with a dynamic CSS gradient.
====================================================================================================
*/
import React, { useState, useRef, useCallback } from 'react';

const DynamicGradientText = React.memo(({ text, initialColors, hoverColors, className = "" }) => {
  const [currentAngle, setCurrentAngle] = useState(90);
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef(null);

  const handleMouseMove = useCallback((event) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const newAngle = (x / rect.width) * 180;
    setCurrentAngle(newAngle);
  }, []);

  const gradientColors = isHovered ? hoverColors : initialColors;
  const angleToUse = isHovered ? currentAngle : 90;

  const gradientStyle = {
    backgroundImage: `linear-gradient(${angleToUse}deg, ${gradientColors.join(', ')})`,
    transition: isHovered ? 'none' : 'background-image 0.3s ease-in-out',
  };

  return (
    <span
      ref={textRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentAngle(90);
      }}
      onMouseMove={isHovered ? handleMouseMove : undefined}
      className={`bg-clip-text text-transparent cursor-pointer select-none ${className || ''}`}
      style={gradientStyle}
      title={text}
    >
      {text}
    </span>
  );
});
DynamicGradientText.displayName = 'DynamicGradientText';
export default DynamicGradientText;
