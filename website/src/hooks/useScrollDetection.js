import { useState, useEffect } from 'react';

export function useScrollDetection(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);
  
  return scrolled;
}