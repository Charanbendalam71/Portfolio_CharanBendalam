import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Instagram, Sparkles, Code, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Frontend Developer', 'Web Designer', 'Problem Solver', 'Creative Coder'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [isNameHovered, setIsNameHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    if (currentIndex < currentTitle.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setTitleIndex((titleIndex + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, titleIndex, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FloatingIcon = ({ icon, delay, position }: { icon: React.ReactNode, delay: string, position: string }) => (
    <div className={`absolute ${position} text-blue-400 dark:text-blue-300 opacity-20 animate-bounce`} style={{ animationDelay: delay }}>
      {icon}
    </div>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-300 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingIcon icon={<Code size={24} />} delay="0s" position="top-20 left-20" />
        <FloatingIcon icon={<Sparkles size={20} />} delay="1s" position="top-40 right-32" />
        <FloatingIcon icon={<Heart size={18} />} delay="2s" position="bottom-40 left-32" />
        <FloatingIcon icon={<Code size={22} />} delay="0.5s" position="bottom-20 right-20" />
        <FloatingIcon icon={<Sparkles size={16} />} delay="1.5s" position="top-60 left-1/4" />
        <FloatingIcon icon={<Heart size={20} />} delay="2.5s" position="bottom-60 right-1/4" />
      </div>

      {/* Animated Background Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Profile Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
              >
                {/* Animated Ring Effects */}
                <div className={`absolute inset-0 rounded-full transition-all duration-700 ${isImageHovered ? 'animate-spin' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30"></div>
                </div>
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${isImageHovered ? 'scale-110 rotate-180' : 'scale-100'}`}>
                  <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-md opacity-40"></div>
                </div>
                
                {/* Main Image Container */}
                <div className={`relative bg-white dark:bg-gray-800 p-2 rounded-full shadow-2xl transition-all duration-500 ${isImageHovered ? 'scale-105 shadow-3xl' : ''}`}>
                  <div className={`relative overflow-hidden rounded-full transition-all duration-500 ${isImageHovered ? 'scale-110' : ''}`}>
                    <img
                      src="/public/Charan_ Passport.jpg"
                      alt="Charan Bendalam"
                      className={`w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-lg transition-all duration-500 ${isImageHovered ? 'brightness-110 contrast-110' : ''}`}
                    />
                    {/* Overlay Effect on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full transition-opacity duration-500 ${isImageHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                  </div>
                </div>

                {/* Floating Particles on Hover */}
                {isImageHovered && (
                  <>
                    <div className="absolute -top-4 -left-4 text-yellow-400 animate-bounce" style={{ animationDelay: '0s' }}>
                      <Sparkles size={20} />
                    </div>
                    <div className="absolute -top-2 -right-6 text-pink-400 animate-bounce" style={{ animationDelay: '0.5s' }}>
                      <Heart size={18} />
                    </div>
                    <div className="absolute -bottom-4 -left-6 text-blue-400 animate-bounce" style={{ animationDelay: '1s' }}>
                      <Code size={22} />
                    </div>
                    <div className="absolute -bottom-2 -right-4 text-purple-400 animate-bounce" style={{ animationDelay: '1.5s' }}>
                      <Sparkles size={16} />
                    </div>
                  </>
                )}

                {/* Animated Wave Emoji */}
                <div className={`absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${isImageHovered ? 'animate-pulse scale-110' : 'animate-bounce'}`}>
                  <span className="text-2xl">👋</span>
                </div>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="order-1 lg:order-2 text-left">
              {/* Animated Name */}
              <div 
                className="relative"
                onMouseEnter={() => setIsNameHovered(true)}
                onMouseLeave={() => setIsNameHovered(false)}
              >
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in cursor-pointer transition-all duration-500 ${isNameHovered ? 'scale-105' : ''}`}>
                  Hi, I'm{' '}
                  <span className={`relative inline-block transition-all duration-500 ${isNameHovered ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse' : 'text-blue-600 dark:text-blue-400'}`}>
                    Charan
                    {/* Animated Underline */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ${isNameHovered ? 'w-full' : 'w-0'}`}></div>
                    {/* Sparkle Effects on Name Hover */}
                    {isNameHovered && (
                      <>
                        <div className="absolute -top-2 left-0 text-yellow-400 animate-ping">
                          <Sparkles size={16} />
                        </div>
                        <div className="absolute -top-1 right-0 text-pink-400 animate-ping" style={{ animationDelay: '0.5s' }}>
                          <Sparkles size={14} />
                        </div>
                        <div className="absolute top-1/2 -left-4 text-blue-400 animate-ping" style={{ animationDelay: '1s' }}>
                          <Sparkles size={12} />
                        </div>
                      </>
                    )}
                  </span>
                </h1>
              </div>
              
              {/* Enhanced Typing Animation */}
              <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12 flex items-center">
                <span className="mr-2">I'm a</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold min-w-[250px] relative">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
                  {/* Typing Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded opacity-20 -z-10"></div>
                </span>
              </div>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Passionate about creating{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">beautiful</span>,{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">responsive</span> web experiences with{' '}
                <span className="font-semibold text-pink-600 dark:text-pink-400">modern technologies</span>.
                I specialize in frontend development and love solving complex problems.
              </p>

              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex space-x-6">
                <a
                  href="https://github.com/Charanbendalam71"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transform hover:scale-110 transition-all duration-300 relative"
                >
                  <Github size={28} />
                  <div className="absolute -inset-2 bg-gray-200 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a
                  href="https://linkedin.com/in/charan-bendalam-743b85290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300 relative"
                >
                  <Linkedin size={28} />
                  <div className="absolute -inset-2 bg-blue-200 dark:bg-blue-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a
                  href="https://www.instagram.com/i_charan1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transform hover:scale-110 transition-all duration-300 relative"
                >
                  <Instagram size={28} />
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-700 dark:to-purple-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a
                  href="mailto:charan_bendalam@srmap.edu.in"
                  className="group text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300 relative"
                >
                  <Mail size={28} />
                  <div className="absolute -inset-2 bg-blue-200 dark:bg-blue-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="mt-16">
            <button
              onClick={() => scrollToSection('about')}
              className="group animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative"
            >
              <ChevronDown size={32} />
              <div className="absolute -inset-4 bg-blue-200 dark:bg-blue-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;