import { useState, useEffect, useRef } from 'react';

const DEFAULT_SCROLL_ANIMATION_OPTIONS = { threshold: 0.1, triggerOnce: true };

const useScrollAnimation = (options = DEFAULT_SCROLL_ANIMATION_OPTIONS) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce && observer) {
          observer.unobserve(entry.target);
        }
      } else {
        if (!options.triggerOnce) {
          setIsVisible(false);
        }
      }
    }, options);

    observer.observe(currentElement);

    return () => {
      if (observer && currentElement) {
        observer.unobserve(currentElement);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(options)]); // Stringify options to ensure effect re-runs if options object changes structurally

  return [elementRef, isVisible];
};

export default useScrollAnimation;
