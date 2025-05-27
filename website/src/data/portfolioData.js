
import React from 'react'; // Needed for JSX in icons
import myProfilePic from '../assets/images/profile.png'
import {
  Home, User, Zap, AppWindow, Mail, Github, Linkedin, Code, Brain, Activity, Monitor,
  ExternalLink, ArrowRight, Sparkles, Terminal, Palette, Database, Coffee, Award,
  Calendar, MapPin, Download, Briefcase, BookOpen, BarChart3, Layers, Settings,
  Server, Smartphone, Network, FileJson, Camera, Cpu
} from 'lucide-react';

// If you are using local images from src/assets, import them here:
// import profileImageSrc from '../assets/images/profile.png';
// import weatherAppImage from '../assets/images/weather-app.jpg'; // Example

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
  subtitle: "I craft elegant solutions through code, specializing in web applications and AI that push the boundaries of what's possible.",
  profileImage: myProfilePic,
  profilePlaceholder: "https://placehold.co/500x500/1F2937/9CA3AF?text=DG",
};

export const ABOUT_ME = {
  story: [
    "I'm a Computer Scientist with a passion for creating innovative solutions through technology. Currently working as an AI & Software Developer at MEG Engineers Inc., where I architect full-stack applications and implement AI models for practical business applications.",
    "With expertise in Python, JavaScript, C++, and Java, I combine theoretical knowledge with practical experience to build solutions that matter. My focus spans web development, machine learning, and creating intuitive user experiences.",
    "I'm driven by the challenge of solving complex problems and the satisfaction of seeing ideas come to life through code. Always learning, always building, always pushing forward."
  ],
  quickFacts: [
    { icon: <Award className="w-5 h-5 text-blue-400" />, text: "B.S. Computer Science" },
    { icon: <MapPin className="w-5 h-5 text-green-400" />, text: "Pharr, TX" },
    { icon: <Coffee className="w-5 h-5 text-orange-400" />, text: "Coffee Powered" },
    { icon: <Code className="w-5 h-5 text-purple-400" />, text: "Full Stack Developer" },
  ],
  timeline: [
    { year: '2025 - Present', title: 'AI & Software Developer', company: 'MEG Engineers Inc.', description: 'Architecting full-stack applications and implementing AI models' },
    { year: '2024 - 2025', title: 'Assistant Project Manager', company: 'MEG Engineers Inc.', description: 'Data analysis and project coordination' },
    { year: '2019 - 2023', title: 'B.S. Computer Science', company: 'UT Rio Grande Valley', description: 'Graduated with focus on AI and web development' }
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
      ],
      colorClasses: { text: "text-teal-300", border: "border-teal-700/50", pillBg: "bg-teal-500/10 hover:bg-teal-500/20", pillText: "text-teal-300" }
    },
    {
      categoryTitle: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", icon: <Github size={16} className="mr-1.5 opacity-80" /> },
        { name: "Docker", icon: <AppWindow size={16} className="mr-1.5 opacity-80" /> },
        { name: "Firebase", icon: <Database size={16} className="mr-1.5 opacity-80" /> },
        { name: "MongoDB", icon: <Database size={16} className="mr-1.5 opacity-80" /> },
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
    {
      title: "Technical Consultation",
      icon: <Settings className="w-8 h-8" />,
      colorClasses: {bgGradient: 'from-orange-400 to-orange-600', text: "text-orange-300"},
      description: "Providing expert advice, strategic planning, and architectural guidance for your software projects and technological challenges.",
    }
  ]
};

export const PROJECTS_DATA = [
  {
    title: 'Weather Application',
    category: 'Web Development',
    description: 'Real-time weather app with dynamic conditions and forecasts. Features a clean UI and utilizes a third-party weather API.',
    techIcons: [
      { name: 'JavaScript', icon: <FileJson size={14} className="mr-1.5 opacity-80" /> },
      { name: 'REST API', icon: <Network size={14} className="mr-1.5 opacity-80" /> },
      { name: 'Responsive Design', icon: <Smartphone size={14} className="mr-1.5 opacity-80" /> },
    ],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&q=80', // Replace or use imported variable
    placeholder: 'https://placehold.co/600x400/374151/9CA3AF?text=Weather+App',
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/Chavetoni/weather',
    live: 'https://chavetoni.github.io/weather/'
  },
  // ... (other projects, ensure image paths are updated)
  {
    title: 'EasyPeasyPal',
    category: 'Mobile Development',
    description: 'A mobile application designed to make technology more accessible for senior citizens, focusing on intuitive UI/UX.',
    techIcons: [
      { name: 'Flutter', icon: <Smartphone size={14} className="mr-1.5 opacity-80" /> },
      { name: 'Firebase', icon: <Database size={14} className="mr-1.5 opacity-80" /> },
      { name: 'UI/UX', icon: <Palette size={14} className="mr-1.5 opacity-80" /> },
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&q=80', // Replace
    placeholder: 'https://placehold.co/600x400/4B5563/9CA3AF?text=EasyPeasyPal',
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/Chavetoni'
  },
  {
    title: 'AI Attendance System',
    category: 'AI/ML',
    description: 'Facial recognition system using ResNet-18 for attendance tracking. Leverages deep learning for accurate identification.',
    techIcons: [
      { name: 'Python', icon: <Code size={14} className="mr-1.5 opacity-80" /> },
      { name: 'PyTorch', icon: <Cpu size={14} className="mr-1.5 opacity-80" /> },
      { name: 'OpenCV', icon: <Camera size={14} className="mr-1.5 opacity-80" /> },
    ],
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop&q=80', // Replace
    placeholder: 'https://placehold.co/600x400/1F2937/9CA3AF?text=AI+Attendance',
    gradient: 'from-green-500 to-teal-500',
    github: 'https://github.com/Chavetoni'
  },
  {
    title: 'Snake Game ML',
    category: 'AI/ML',
    description: 'Classic snake game enhanced with machine learning-powered gesture controls using OpenCV for real-time hand tracking.',
    techIcons: [
      { name: 'Python', icon: <Code size={14} className="mr-1.5 opacity-80" /> },
      { name: 'OpenCV', icon: <Camera size={14} className="mr-1.5 opacity-80" /> },
      { name: 'ML', icon: <Brain size={14} className="mr-1.5 opacity-80" /> },
    ],
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&q=80', // Replace
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
