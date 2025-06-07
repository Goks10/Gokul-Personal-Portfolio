import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-pulse">
              Gokul K
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
            Creative UI/UX Designer
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through innovative design and user-centered solutions. 
            2 years of freelance expertise in creating interfaces that captivate and convert.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center space-x-8 mb-16">
          <a
            href="https://github.com/gokulk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Github size={32} />
          </a>
          <a
            href="https://linkedin.com/in/gokulk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:uixgokul@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={32} />
          </a>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-400 animate-bounce hover:text-blue-300 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
    </section>
  );
};

export default Hero;