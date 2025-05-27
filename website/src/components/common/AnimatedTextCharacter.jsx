/*
====================================================================================================
File: src/components/common/AnimatedTextCharacter.jsx
Description: Animates text by revealing characters one by one.
====================================================================================================
*/
import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation'; // Correct path

const DEFAULT_TEXT_ANIMATION_OPTIONS = { threshold: 0.01, triggerOnce: true };

const AnimatedTextCharacter = React.memo(({ text, delay = 0, stagger = 50, className = "", as: Component = 'span', animationOptions = DEFAULT_TEXT_ANIMATION_OPTIONS }) => {
  const [setRef, isVisible] = useScrollAnimation(animationOptions);

  if (React.isValidElement(text)) {
    let derivedAriaLabel;
    if (text.props) {
        if (typeof text.props.text === 'string') derivedAriaLabel = text.props.text;
        else if (typeof text.props.name === 'string') derivedAriaLabel = text.props.name;
        else if (text.props.children && !Array.isArray(text.props.children) && text.props.children.props && typeof text.props.children.props.text === 'string') {
            derivedAriaLabel = text.props.children.props.text;
        }
        else if (text.props.children && Array.isArray(text.props.children) && text.props.children[0] && text.props.children[0].props && typeof text.props.children[0].props.text === 'string') {
           derivedAriaLabel = text.props.children[0].props.text;
        }
    }

    return (
      <Component
        ref={setRef}
        className={`${className || ''} inline-block transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
        aria-label={derivedAriaLabel}
      >
        {text}
      </Component>
    );
  }

  if (typeof text !== 'string') {
    return <Component className={className || ''}>{String(text === undefined ? '' : text)}</Component>;
  }

  const characters = text.split('');
  return (
    <Component ref={setRef} aria-label={text} className={`inline-block ${className || ''}`}>
      {characters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={`inline-block transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionDelay: `${delay + index * stagger}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Component>
  );
});
AnimatedTextCharacter.displayName = 'AnimatedTextCharacter';
export default AnimatedTextCharacter;