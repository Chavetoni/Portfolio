
import React from 'react'; // Needed for JSX in icons
import myProfilePic from '../assets/images/profile.png'
import {
  Home, User, Zap, AppWindow, Mail, Github, Linkedin, Code, Brain, Activity, Monitor,
  ExternalLink, ArrowRight, Sparkles, Terminal, Palette, Database, Coffee, Award,
  Calendar, Download, Briefcase, BookOpen, BarChart3, Layers, Settings,
  Server, Smartphone, Network, FileJson, Camera, Cpu, GraduationCap,
  LanguagesIcon,
  Layers3,
  FileStack
} from 'lucide-react';

import EPPCover from '../assets/images/projects/EPP.png';
import SnakeCover from '../assets/images/projects/snake.png';
import ClientTrackerCover from '../assets/images/projects/ClientTracker.png';
import weatherCover from '../assets/images/projects/weather.png';
import CartpoleCover from '../assets/images/projects/cartpole.png';


export const NAV_LINKS = [
  { id: 'home', label: 'Home', icon: <Home size={18} /> },
  { id: 'about', label: 'About', icon: <User size={18} /> },
  { id: 'skills', label: 'Skills', icon: <Zap size={18} /> }, 
  { id: 'projects', label: 'Projects', icon: <AppWindow size={18} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
];

export const SOCIAL_LINKS = [
  { href: 'https://github.com/Chavetoni', icon: <Github className="w-6 h-6" />, label: 'GitHub Profile' },
  { href: 'https://linkedin.com/in/dangarjr', icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn Profile' },
];

export const HERO_INFO = {
  name: "Daniel",
  greeting: "Hi, I'm ",
  title: "Computer Scientist & Developer",
  subtitle: "Driven to solve problems and make a difference.",
  profileImage: myProfilePic,
  profilePlaceholder: "https://placehold.co/500x500/1F2937/9CA3AF?text=DG",
};

export const ABOUT_ME = {
  story: [
    "As a Computer Scientist, I'm passionate about turning innovative ideas into reality through tech. In my current role as an AI & Software Developer,  I get to design and build full-stack applications that solve real-world business challenges.",
    "I'm proficient in Python, JavaScript, and C++, with a keen focus on web development, machine/deep learning, and crafting intuitive user experiences.",
    "I'm driven by the challenge of solving complex problems through code, seeing a project through from its initial idea to a finished product, and always experimenting to find the best approach. I'm all about constantly learning, building new things, and pushing what's possible."
  ],
  quickFacts: [
    { icon: <GraduationCap className="w-5 h-5 text-blue-400" />, text: "B.S. Computer Science" },
    { icon: <LanguagesIcon className="w-5 h-5 text-green-400" />, text: "Bilingual" },
    { icon: <Coffee className="w-5 h-5 text-orange-400" />, text: "Coffee Powered" },
    { icon: <Code className="w-5 h-5 text-purple-400" />, text: "Full Stack Developer" },
  ],
  timeline: [
    { year: '2025 - Present', title: 'AI & Software Developer', company: 'MEG Engineers Inc.', description: 'Architecting full-stack applications and implementing AI models' },
    { year: '2024 - 2025', title: 'Assistant Project Manager', company: 'MEG Engineers Inc.', description: 'Data analysis and project coordination' },
    { year: '2019 - 2024', title: 'B.S. Computer Science', company: 'UT Rio Grande Valley', description: 'Graduated with a focus in Web Dev and Deep Learning' }
  ]
};

export const SKILLS_DATA = {
  technicalSkills: [
    {
      categoryTitle: "Programming Languages",
      skills: [
        { name: "Python", icon: <Code size={16} className="mr-1.5 opacity-80" /> },
        { name: "JavaScript", icon: <FileJson size={16} className="mr-1.5 opacity-80" /> },
        { name: "C++", icon: <Code size={16} className="mr-1.5 opacity-80" /> },
        { name: "Java", icon: <Coffee size={16} className="mr-1.5 opacity-80" /> },
        { name: "SQL", icon: <Database size={16} className="mr-1.5 opacity-80" /> },
        { name: "HTML/CSS", icon: <Monitor size={16} className="mr-1.5 opacity-80" /> }, 
        { name: "Dart", icon: <Code size={16} className="mr-1.5 opacity-80" /> }
      ],
      colorClasses: { text: "text-sky-300", border: "border-sky-700/50", pillBg: "bg-sky-500/10 hover:bg-sky-500/20", pillText: "text-sky-300" }
    },
    {
      categoryTitle: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <Layers size={16} className="mr-1.5 opacity-80" /> },
        { name: "Node.js", icon: <Server size={16} className="mr-1.5 opacity-80" /> },
        { name: "PyTorch", icon: <Cpu size={16} className="mr-1.5 opacity-80" /> },
        { name: "Tailwind CSS", icon: <Palette size={16} className="mr-1.5 opacity-80" /> },
        { name: "TensorFlow/Keras", icon: <Brain size={16} className="mr-1.5 opacity-80" /> }, 
        { name: "Next.js", icon: <Layers size={16} className="mr-1.5 opacity-80" /> }, 
        { name: "Pandas", icon: <BarChart3 size={16} className="mr-1.5 opacity-80" /> }, 
        { name: "NumPy", icon: <Cpu size={16} className="mr-1.5 opacity-80" /> }, 
        { name: "Vite", icon: <Zap size={16} className="mr-1.5 opacity-80" /> },

        
      ],
      colorClasses: { text: "text-teal-300", border: "border-teal-700/50", pillBg: "bg-teal-500/10 hover:bg-teal-500/20", pillText: "text-teal-300" }
    },
    {
      categoryTitle: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", icon: <Github size={16} className="mr-1.5 opacity-80" /> },
        { name: "Docker", icon: <AppWindow size={16} className="mr-1.5 opacity-80" /> },
        { name: "Firebase", icon: <Database size={16} className="mr-1.5 opacity-80" /> },
        { name: "Django", icon: <Database size={16} className="mr-1.5 opacity-80" /> },
        { name: "Supabase", icon: <Database size={16} className="mr-1.5 opacity-80" /> },
        { name: "Vercel", icon: <AppWindow size={16} className="mr-1.5 opacity-80" /> },
      ],
      colorClasses: { text: "text-indigo-300", border: "border-indigo-700/50", pillBg: "bg-indigo-500/10 hover:bg-indigo-500/20", pillText: "text-indigo-300" }
    }
  ],
  expertiseAreas: [
    {
      title: 'Web Application Development',
      icon: <Monitor className="w-8 h-8" />,
      colorClasses: {bgGradient: 'from-blue-400 to-blue-600', text: "text-blue-300"},
      description: "Building responsive and scalable web applications tailored to your needs, leveraging modern front-end frameworks and robust back-end technologies."
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      colorClasses: {bgGradient: 'from-purple-400 to-purple-600', text: "text-purple-300"},
      description: "Developing and integrating AI models for tasks like data analysis, prediction, and automation using cutting-edge libraries and techniques."
    },
    {
      title: 'UI/UX Design & Prototyping',
      icon: <Palette className="w-8 h-8" />,
      colorClasses: {bgGradient: 'from-pink-400 to-pink-600', text: "text-pink-300"},
      description: "Crafting intuitive, accessible, and engaging user interfaces with a strong focus on user experience, from research to high-fidelity prototypes."
    },
    {
      title: 'Data Analysis & Insights',
      icon: <BarChart3 className="w-8 h-8" />,
      colorClasses: {bgGradient: 'from-green-400 to-green-600', text: "text-green-300"},
      description: "Transforming raw data into actionable insights through comprehensive analysis, compelling visualization, and sound statistical modeling."
    },
  ]
};

export const PROJECTS_DATA = [
  {
    title: 'Client Tracker App',
    category: 'Web Development',
    description: 'A CRM application for managing clients, tracking interactions, and scheduling follow-ups. Built for Project Managers to streamline client management.',
    techIcons: [
      { name: 'React', icon: <Layers size={14} className="mr-1.5 opacity-80" /> },
      { name: 'Next.js', icon: <Layers size={14} className="mr-1.5 opacity-80" /> },
      { name: 'Supabase', icon: <Server size={14} className="mr-1.5 opacity-80" /> },
      { name: 'UI/UX', icon: <Palette size={14} className="mr-1.5 opacity-80" /> },
    ],
    image: ClientTrackerCover,
    placeholder: 'https://placehold.co/600x400/1F2937/9CA3AF?text=Client+Tracker+App',
    gradient: 'from-green-500 to-teal-500',
  },
  
  {
    title: 'EasyPeasyPal',
    category: 'Mobile Development',
    description: 'A mobile application designed to make technology more accessible for senior citizens, focusing on intuitive UI/UX.',
    techIcons: [
      { name: 'Flutter', icon: <Smartphone size={14} className="mr-1.5 opacity-80" /> },
      { name: 'Firebase', icon: <Database size={14} className="mr-1.5 opacity-80" /> },
      { name: 'UI/UX', icon: <Palette size={14} className="mr-1.5 opacity-80" /> },
    ],
    image: EPPCover,
    placeholder: 'https://placehold.co/600x400/4B5563/9CA3AF?text=EasyPeasyPal',
    gradient: 'from-purple-500 to-pink-500',
    website: 'https://easypeasypal.onrender.com/'
  },
  {
    title: 'Weather Application',
    category: 'Web Development',
    description: 'A web application that provides real-time weather information using an API. I created this using basic HTML, CSS, and JavaScript in my early academic years to learn how to work with APIs and build responsive designs.',
    techIcons: [
      { name: 'JavaScript', icon: <FileJson size={14} className="mr-1.5 opacity-80" /> },
      { name: 'REST API', icon: <Network size={14} className="mr-1.5 opacity-80" /> },
      { name: 'Responsive Design', icon: <Smartphone size={14} className="mr-1.5 opacity-80" /> },
    ],
    image: weatherCover,
    placeholder: 'https://placehold.co/600x400/374151/9CA3AF?text=Weather+App',
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/Chavetoni/weather',
    live: 'https://chavetoni.github.io/weather/'
  },

  {
    title: 'DQN Cartpole',
    category: 'AI/ML',
    description: 'Worked on a Deep Q-Network project to introduce myself to reinforcement learning. The project involved training an agent to balance a pole on a cart using Q-learning techniques.',
    techIcons: [
      { name: 'Python', icon: <Code size={14} className="mr-1.5 opacity-80" /> },
      { name: 'Tensorflow/Keras', icon: <Cpu size={14} className="mr-1.5 opacity-80" /> },
      { name: 'Reinforcement Learning', icon: <Brain size={14} className="mr-1.5 opacity-80" /> },
    ],
    image: CartpoleCover,
    placeholder: 'https://placehold.co/600x400/1F2937/9CA3AF?text=DQN+Cartpole',
    gradient: 'from-yellow-500 to-amber-500',
    github: 'https://github.com/Chavetoni/CartPole_RL'
  },
  {
    title: 'Snake Game ML',
    category: 'AI/ML',
    description: 'My first Machine learning project integrating a clasic snake game with machine learning-powered gesture controls throuch Google Teachable Machine to allowed the user to control the snake using hand gestures.',
    techIcons: [
      { name: 'Python', icon: <Code size={14} className="mr-1.5 opacity-80" /> },
      { name: 'OpenCV', icon: <Camera size={14} className="mr-1.5 opacity-80" /> },
      { name: 'ML', icon: <Brain size={14} className="mr-1.5 opacity-80" /> },
    ],
    image: SnakeCover,
    placeholder: 'https://placehold.co/600x400/6B7280/9CA3AF?text=Snake+Game+ML',
    gradient: 'from-orange-500 to-red-500',
    github: 'https://github.com/Chavetoni/snakegame'
  }
];
export const PROJECT_CATEGORIES = ['All', ...new Set(PROJECTS_DATA.map(p => p.category))];

export const CONTACT_INFO = [
  { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'Dangarci956@gmail.com', href: 'mailto:Dangarci956@gmail.com' },
  { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', value: 'dangarjr', href: 'https://linkedin.com/in/dangarjr' },
  { icon: <Github className="w-6 h-6" />, label: 'GitHub', value: 'Chavetoni', href: 'https://github.com/Chavetoni' }
];

export const FOOTER_LINKS = NAV_LINKS.map(link => ({ label: link.label, sectionId: link.id }));
