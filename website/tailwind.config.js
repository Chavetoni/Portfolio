/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette based on your current design
        primary: {
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse-slow 8s infinite ease-in-out',
        'pulse-slower': 'pulse-slower 10s infinite ease-in-out',
        'fadeInDown': 'fadeInDown 0.5s ease-out',
        'fadeIn': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.1', transform: 'scale(0.95)' },
          '50%': { opacity: '0.3', transform: 'scale(1.05)' },
        },
        'pulse-slower': {
          '0%, 100%': { opacity: '0.05', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(1.1)' },
        },
        'fadeInDown': {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeIn': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 15px 5px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 15px 5px rgba(168, 85, 247, 0.3)',
      },
    },
  },
  plugins: [],
}