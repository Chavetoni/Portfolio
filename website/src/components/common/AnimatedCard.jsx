/*
====================================================================================================
File: src/components/common/AnimatedCard.jsx
Description: Wrapper component for scroll-animated cards.
====================================================================================================
*/
import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation'; // Correct path

const AnimatedCard = React.memo(({ children, className = "", delay = 0, as: Component = 'div' }) => {
  const [setRef, isVisible] = useScrollAnimation();
  return (
    <Component
      ref={setRef}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms`}}
    >
      {children}
    </Component>
  );
});
AnimatedCard.displayName = 'AnimatedCard';

export default AnimatedCard;