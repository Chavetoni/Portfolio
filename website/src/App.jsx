import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, Mail, Phone, ChevronDown, ExternalLink, Code, Home, User, Briefcase, MessageSquare, Award, Activity, Brain, Users, MonitorPlay, Github } from 'lucide-react'; // Added Github icon

// Main App Component
const App = () => {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track the currently active section in the navigation
  const [activeSection, setActiveSection] = useState('home');
  // State to track if the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle scroll events for navbar style and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let currentSection = 'home'; // Default to home
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is within the viewport (top 150px)
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup scroll listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to a specific section smoothly
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); // Update active section immediately on click
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  // Simulated project data
  const projects = [
    {
      id: 1,
      title: "Weather Application",
      description: "A real-time weather website that has a search function and displays dynamic weather conditions and forecasts. Integrated APIs like OpenWeatherMap and LocationIQ for live weather updates and location autosuggestions.",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Weather+App&font=inter",
      tags: ["JavaScript", "HTML", "CSS", "API"],
      category: "Web Development",
      githubLink: "https://github.com/Chavetoni/weather",
      liveLink: "https://chavetoni.github.io/weather/"
    },
    {
      id: 2,
      title: "EasyPeasyPal",
      description: "A mobile app designed to make technology accessible for seniors. Simplifies daily tasks like appointment management, medication tracking, and communication. Created UI/UX and managed a Firebase database.",
      image: "https://placehold.co/600x400/3b82f6/ffffff?text=EasyPeasyPal&font=inter",
      tags: ["Flutter", "Dart", "Firebase", "UI/UX"],
      category: "Mobile Development",
      githubLink: "https://github.com/Chavetoni",
      liveLink: null
    },
    {
      id: 3,
      title: "AI Powered Attendance",
      description: "Developed a facial recognition AI model using ResNet-18 for efficient attendance tracking. Gained expertise in PyTorch for implementing advanced data preprocessing and optimization techniques.",
      image: "https://placehold.co/600x400/10b981/ffffff?text=AI+Attendance&font=inter",
      tags: ["Python", "PyTorch", "ResNet-18", "AI"],
      category: "Machine Learning",
      githubLink: "https://github.com/Chavetoni",
      liveLink: null
    },
    {
      id: 4,
      title: "Snake Game with ML",
      description: "A snake game which implements Machine Learning that recognizes hand gestures as controls. This modern take on the classic arcade game incorporates image recognition for innovative control.",
      image: "https://placehold.co/600x400/f59e0b/ffffff?text=Snake+Game+ML&font=inter",
      tags: ["Python", "OpenCV", "Game Dev", "ML"],
      category: "Machine Learning",
      githubLink: "https://github.com/Chavetoni/snakegame",
      liveLink: null
    }
  ];


  // State for project category filter
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web Development', 'Mobile Development', 'Machine Learning'];

  // Filter projects based on the active category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* Header/Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo/Brand Name */}
          <div className="flex items-center">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home');}} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer">
              DG<span className="text-white">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-6 lg:space-x-8 items-center">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`capitalize py-1 px-2 relative text-sm font-medium transition-colors duration-300 ${activeSection === item ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
                  >
                    {item}
                    {activeSection === item && (
                      <span className="absolute bottom-[-4px] left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                    )}
                  </button>
                </li>
              ))}
              <li>
                <a href="Resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-4 bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg transform hover:scale-105">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-gray-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 shadow-lg animate-fadeInDown">
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className={`capitalize block w-full text-left py-2 px-3 rounded-md transition-colors duration-300 ${activeSection === item ? 'text-blue-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
                <li>
                  <a href="Resume.pdf" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2.5 px-4 rounded-md text-center font-medium hover:opacity-90 transition-opacity mt-2">
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-24 relative overflow-hidden">
          {/* Background animated gradient */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 opacity-70"></div>
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-purple-600 rounded-full opacity-20 filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600 rounded-full opacity-20 filter blur-3xl animate-pulse-slower"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center relative z-10">
            {/* Text Content */}
            <div className="md:w-3/5 lg:w-1/2 md:pr-8 mt-12 md:mt-0 text-center md:text-left">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Daniel Garcia Jr.</span>
                  </h1>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl mt-2 md:mt-4 text-gray-300 font-medium">Computer Scientist & Developer</h2>
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                  I develop web applications and AI solutions with a focus on intuitive user experiences.
                  Passionate about creating technology that makes a difference.
                </p>
                <div className="pt-4 md:pt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact');}} className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 py-3 px-8 rounded-full text-base font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105">
                    Contact Me
                  </a>
                  <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects');}} className="inline-block bg-transparent border-2 border-gray-400 text-gray-300 py-3 px-8 rounded-full text-base font-semibold hover:bg-gray-700 hover:border-gray-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-blue-500/30">
                    View Projects
                  </a>
                </div>
                <div className="pt-6 md:pt-8 flex items-center space-x-6 justify-center md:justify-start">
                  <a href="https://github.com/Chavetoni" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">
                    <Github size={28} />
                  </a>
                  <a href="https://www.linkedin.com/in/dangarjr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="md:w-2/5 lg:w-1/2 flex justify-center mt-8 md:mt-0">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500/70 shadow-2xl shadow-blue-600/40 transform transition-transform duration-500 hover:scale-105 hover:shadow-purple-500/50">
                <img
                  src="https://placehold.co/400x400/7dd3fc/1e293b?text=DGJ&font=inter"
                  alt="Daniel Garcia Jr."
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Scroll Down Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
            <button onClick={() => scrollToSection('about')} aria-label="Scroll to about section" className="text-white animate-bounce p-2 rounded-full hover:bg-white/10 transition-colors">
              <ChevronDown size={32} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-28 min-h-screen flex items-center relative bg-gray-900 bg-opacity-30">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-900 via-blue-900/80 to-transparent opacity-40 z-0"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">About Me</h2>
              <div className="w-24 h-1.5 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
              {/* Left Column: My Journey */}
              <div className="md:col-span-3 space-y-6 bg-gray-800/40 p-6 sm:p-8 rounded-xl shadow-xl backdrop-blur-sm">
                <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-4">My Journey</h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  I'm a Computer Scientist with a passion for creating innovative solutions through technology.
                  I currently work as an AI & Software Developer at MEG Engineers Inc., where I architect full-stack
                  applications and implement AI models focused on practical business applications.
                </p>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  I have a strong grounding in both theory and practice, with a focus on web applications and
                  AI applications. Skilled in Python, JavaScript, C++, and Java, I am always seeking to learn and
                  integrate cutting-edge technologies into my work.
                </p>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  My ambition is to grow as a tech innovator, making significant contributions to computer science.
                  I am keen to apply my diverse skills and enthusiasm in the tech industry, eagerly welcoming
                  opportunities for collaboration on challenging and transformative projects.
                </p>
              </div>

              {/* Right Column: Experience & Education Timeline */}
              <div className="md:col-span-2 space-y-6 bg-gray-800/40 p-6 sm:p-8 rounded-xl shadow-xl backdrop-blur-sm">
                <h3 className="text-2xl sm:text-3xl font-semibold text-purple-300 mb-4">Experience & Education</h3>
                <div className="space-y-8">
                  {/* Timeline Item 1 */}
                  <div className="relative pl-8 border-l-2 border-blue-400 group">
                    <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-500 border-2 border-gray-800 transition-all duration-300 group-hover:bg-purple-500 group-hover:scale-125"></div>
                    <div className="mb-1 text-sm text-blue-300 font-semibold">Since February 2025</div>
                    <div className="font-bold text-lg">AI & Software Developer</div>
                    <div className="text-sm text-gray-400">MEG Engineers Inc. | Pharr TX</div>
                    <p className="mt-2 text-gray-300 text-sm">
                      Architecting full-stack applications, implementing AI models for business applications,
                      and collaborating with cross-functional teams to create technical solutions.
                    </p>
                  </div>
                  {/* Timeline Item 2 */}
                  <div className="relative pl-8 border-l-2 border-blue-400 group">
                     <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-500 border-2 border-gray-800 transition-all duration-300 group-hover:bg-purple-500 group-hover:scale-125"></div>
                    <div className="mb-1 text-sm text-blue-300 font-semibold">May 2024 - February 2025</div>
                    <div className="font-bold text-lg">Assistant Project Manager | Data Science</div>
                    <div className="text-sm text-gray-400">MEG Engineers Inc. | Pharr TX</div>
                    <p className="mt-2 text-gray-300 text-sm">
                      Logged and analyzed data from bore sites, collaborated with engineers,
                      and conducted laboratory tests on soil samples.
                    </p>
                  </div>
                  {/* Timeline Item 3 */}
                  <div className="relative pl-8 border-l-2 border-blue-400 group">
                    <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-500 border-2 border-gray-800 transition-all duration-300 group-hover:bg-purple-500 group-hover:scale-125"></div>
                    <div className="mb-1 text-sm text-blue-300 font-semibold">2019 - 2023</div>
                    <div className="font-bold text-lg">B.S. in Computer Science</div>
                    <div className="text-sm text-gray-400">University of Texas Rio Grande Valley</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - UPDATED LAYOUT */}
        <section id="skills" className="py-20 md:py-28 min-h-screen flex items-center bg-gray-900 bg-opacity-60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Skills & Expertise</h2>
              <div className="w-24 h-1.5 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            </div>

            {/* Main container for stacked sections */}
            <div className="space-y-16 md:space-y-20"> {/* Increased spacing between stacked sections */}
              {/* Technical Skills Section */}
              <div className="max-w-4xl mx-auto"> {/* Centering content and limiting width */}
                <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-blue-300 text-center md:text-left">Technical Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Allow more columns on larger screens for skill boxes */}
                  {/* Programming Languages */}
                  <div className="bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "JavaScript", "C++", "Java", "Dart"].map(skill => (
                        <span key={skill} className="bg-blue-900 bg-opacity-70 px-3 py-1.5 rounded-full text-sm font-medium text-gray-200 transition-transform hover:scale-105">{skill}</span>
                      ))}
                    </div>
                  </div>
                  {/* Frameworks & Libraries */}
                  <div className="bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">Frameworks & Libraries</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "Express.js", "Flutter", "PyTorch", "TensorFlow", "Scikit-learn"].map(skill => (
                         <span key={skill} className="bg-blue-900 bg-opacity-70 px-3 py-1.5 rounded-full text-sm font-medium text-gray-200 transition-transform hover:scale-105">{skill}</span>
                      ))}
                    </div>
                  </div>
                  {/* Tools & Platforms */}
                  <div className="bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">Tools & Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Git & GitHub", "Docker", "Firebase", "AWS (Basic)", "MongoDB", "SQL Databases"].map(skill => (
                         <span key={skill} className="bg-blue-900 bg-opacity-70 px-3 py-1.5 rounded-full text-sm font-medium text-gray-200 transition-transform hover:scale-105">{skill}</span>
                      ))}
                    </div>
                  </div>
                  {/* Soft Skills (can be its own card or integrated) */}
                  <div className="bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1"> {/* Example of spanning for layout balance */}
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Problem Solving", "Team Leadership", "Communication", "Fluent in Spanish", "Adaptability"].map(skill => (
                         <span key={skill} className="bg-blue-900 bg-opacity-70 px-3 py-1.5 rounded-full text-sm font-medium text-gray-200 transition-transform hover:scale-105">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas of Expertise Section */}
              <div className="max-w-4xl mx-auto"> {/* Centering content and limiting width */}
                <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-purple-300 text-center md:text-left">Areas of Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> {/* Expertise cards can remain 2-col or go full width */}
                  {/* Web Development Card */}
                  <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center text-white shadow-md">
                      <Code size={28} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Web Development</h4>
                    <p className="text-gray-300 text-sm">
                      Building responsive and interactive web applications with modern JavaScript frameworks.
                    </p>
                  </div>
                  {/* Machine Learning Card */}
                  <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center text-white shadow-md">
                      <Brain size={28} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Machine Learning</h4>
                    <p className="text-gray-300 text-sm">
                      Developing AI models for image recognition, data analysis, and predictive applications.
                    </p>
                  </div>
                  {/* Data Analysis Card */}
                  <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mb-4 flex items-center justify-center text-white shadow-md">
                      <Activity size={28} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Data Analysis</h4>
                    <p className="text-gray-300 text-sm">
                      Transforming complex data into actionable insights through visualization and statistical analysis.
                    </p>
                  </div>
                  {/* UI/UX Design Card */}
                  <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg mb-4 flex items-center justify-center text-white shadow-md">
                      <MonitorPlay size={28} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
                    <p className="text-gray-300 text-sm">
                      Creating intuitive user interfaces and engaging user experiences for web and mobile applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-28 min-h-screen bg-gray-900 bg-opacity-30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Featured Projects</h2>
              <div className="w-24 h-1.5 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-8"></div>
              {/* Category Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-sm sm:text-base rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === category ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Cards Grid - Updated Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800 bg-opacity-70 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-500/40 transition-all duration-300 group flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative w-full h-52 sm:h-60 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                     {/* Overlay for better text readability on image if needed, or remove if image has text space */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                     <div className="absolute bottom-4 left-4">
                        <span className="text-xs px-3 py-1 bg-black/50 text-blue-300 rounded-full font-medium backdrop-blur-sm">{project.category}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow"> {/* flex-grow to push buttons to bottom */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed h-24 overflow-y-auto custom-scrollbar"> {/* Custom scrollbar for overflow */}
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs px-2.5 py-1 bg-blue-900 bg-opacity-70 rounded-full text-gray-200 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Action Buttons - Inspired by image_3e5fcf.jpg */}
                    <div className="mt-auto pt-4 flex flex-col sm:flex-row sm:justify-between gap-3">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full sm:w-auto text-sm text-center text-white bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 py-2.5 px-5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full sm:w-auto text-sm text-center text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-2.5 px-5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>


            {/* View More Projects Button */}
            <div className="text-center mt-12 md:mt-16">
              <a
                href="https://github.com/Chavetoni?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-blue-500 text-blue-300 py-3 px-8 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
              >
                View More Projects on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 min-h-screen flex items-center bg-gray-900 bg-opacity-60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Get In Touch</h2>
              <div className="w-24 h-1.5 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              <p className="mt-6 text-gray-300 max-w-xl mx-auto text-base sm:text-lg">
                I'm always open to new opportunities, collaborations, or just a friendly chat.
                Feel free to reach out!
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-80 backdrop-blur-sm p-8 sm:p-10 rounded-xl shadow-2xl">
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="mt-1 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-100">Email</h4>
                    <a href="mailto:Dangarci956@gmail.com" className="text-blue-300 hover:text-blue-200 transition-colors text-base sm:text-lg break-all">Dangarci956@gmail.com</a>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start space-x-4 group">
                  <div className="mt-1 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-100">Phone</h4>
                    <a href="tel:+19563776113" className="text-blue-300 hover:text-blue-200 transition-colors text-base sm:text-lg">956-377-6113</a>
                  </div>
                </div>
                {/* LinkedIn */}
                <div className="flex items-start space-x-4 group">
                  <div className="mt-1 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-100">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/dangarjr" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors text-base sm:text-lg">linkedin.com/in/dangarjr</a>
                  </div>
                </div>
                {/* GitHub */}
                <div className="flex items-start space-x-4 group">
                  <div className="mt-1 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Github size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-100">GitHub</h4>
                    <a href="https://github.com/Chavetoni" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors text-base sm:text-lg">github.com/Chavetoni</a>
                  </div>
                </div>
                {/* Website */}
                <div className="flex items-start space-x-4 group">
                  <div className="mt-1 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                     <Home size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-100">Website</h4>
                    <a href="https://chavetoni.github.io/website/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors text-base sm:text-lg">chavetoni.github.io/website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 md:py-12 border-t border-gray-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Daniel Garcia Jr. All rights reserved.
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              {['home', 'about', 'projects', 'contact'].map(item => (
                 <a key={item} href={`#${item}`} onClick={(e) => { e.preventDefault(); scrollToSection(item);}} className="text-gray-400 hover:text-blue-300 transition-colors text-sm capitalize">
                   {item}
                 </a>
              ))}
            </div>
          </div>
           <p className="text-center text-xs text-gray-500 mt-6">
            Built with React & Tailwind CSS. Inspired by modern design.
          </p>
        </div>
      </footer>
      {/* Custom scrollbar style (optional, add to your global CSS or a style tag if preferred) */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.5); /* bg-gray-700 with opacity */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(107, 114, 128, 0.7); /* bg-gray-500 with opacity */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.9); /* bg-gray-400 with opacity */
        }
        /* Firefox scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(107, 114, 128, 0.7) rgba(55, 65, 81, 0.5);
        }

        /* Add keyframes for pulse animations if not already in Tailwind config */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(0.95); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
        .animate-pulse-slower {
          animation: pulse-slower 10s infinite ease-in-out;
        }
        .animate-fadeInDown {
            animation: fadeInDown 0.5s ease-out;
        }
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

      `}</style>
    </div>
  );
};

export default App;

