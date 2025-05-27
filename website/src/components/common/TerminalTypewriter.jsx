import React, { useState, useEffect } from 'react';

const phrases = [
  "Let's Build Together",
  "Console.log(Welcome)",
  "Your next Dev partner",
  "404: Boring portfolio Not Found",
  "//TODO: Become a code wizard",
  "Its not a bug, it's an undocumented feature",
  "Coding is like humor, if you have to explain it, it’s not that good",
  "Control+C, Control+V, Repeat",
  "'Works on my machine!' - Every developer ever",
  "!false (It's funny because it's true)",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "You had me at Dark Mode",
  "My code doesn't always work, but when it does, I have no idea why",
  // Add more witty lines here if you like
];

const TerminalTypewriter = ({ className }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const typingSpeed = 100; 
  const deletingSpeed = 50; 
  const pauseBeforeDelete = 2000; 
  const pauseAfterDelete = 500;  

  useEffect(() => {
    let timeoutId;

    if (isDeleting) {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev.substring(0, prev.length - 1));
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        // charIndex will be reset by the typing logic for the new phrase
        // No explicit charIndex reset needed here before pauseAfterDelete
        timeoutId = setTimeout(() => {
            // timeout for pauseAfterDelete
        }, pauseAfterDelete);
      }
    } else { // Typing logic
      const currentPhrase = phrases[currentPhraseIndex];
      if (charIndex < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev + currentPhrase.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, charIndex, currentPhraseIndex]); // Removed phrases from deps as it's constant

  // Reset charIndex when currentPhraseIndex changes and we are not deleting (i.e., starting a new phrase)
  useEffect(() => {
    if (!isDeleting) {
      setCharIndex(0);
      // setDisplayedText(''); // Clear text when starting a new phrase immediately
    }
  }, [currentPhraseIndex, isDeleting]);


  return (
    <span className={`inline-flex items-center font-mono ${className}`}> 
      {displayedText}
      {/* The blinking-cursor class is defined in GlobalStyles.jsx */}
      <span className="blinking-cursor ml-0.5 w-0.5 h-5 bg-blue-300"></span> 
    </span>
  );
};

export default TerminalTypewriter;