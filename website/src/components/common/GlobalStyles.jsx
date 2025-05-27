/*
====================================================================================================
Description: Component to inject global CSS styles.
====================================================================================================
*/
import React from 'react';

const GlobalStyles = () => (
  <style>{`
    body {
      font-family: 'Inter', sans-serif;
    }
    .blinking-cursor {
      animation: blink 1s step-end infinite;
    }
    @keyframes blink {
      from, to { background-color: transparent; }
      50% { background-color: #60a5fa; }
    }
    .animate-float {
      animation-name: float;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(0,0,0,0.1);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(100, 116, 139, 0.5);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(100, 116, 139, 0.7);
    }
    html {
      scroll-behavior: smooth;
    }
    :target {
      scroll-margin-top: 100px; /* Adjust based on your fixed header height */
    }
    @keyframes slow-ping {
      75%, 100% {
        transform: scale(1.6);
        opacity: 0;
      }
    }
    .animate-slow-ping {
      animation: slow-ping 4s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
    .animation-delay-slow-ping-1200 {
        animation-delay: 1.2s;
    }
  `}</style>
);

export default GlobalStyles;