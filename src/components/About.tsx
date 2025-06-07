import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'UI Design', level: 95 },
    { name: 'UX Research', level: 88 },
    { name: 'Prototyping', level: 92 },
    { name: 'User Testing', level: 85 },
    { name: 'Design Systems', level: 90 },
    { name: 'Figma/Adobe XD', level: 97 },
  ];

  const highlights = [
    { icon: Code, title: 'Design Systems', description: 'Built comprehensive design systems for 15+ clients' },
    { icon: Palette, title: 'Creative Solutions', description: 'Delivered unique, brand-aligned digital experiences' },
    { icon: Zap, title: 'Fast Delivery', description: 'Average project completion time reduced by 40%' },
    { icon: Users, title: 'User-Centered', description: 'Increased user engagement by 65% on average' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate UI/UX designer with 2 years of freelance experience, dedicated to creating meaningful digital experiences that bridge the gap between user needs and business goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 mb-4">
                Starting as a self-taught designer, I've evolved into a specialist who understands both the technical and creative aspects of digital product design. My freelance journey has exposed me to diverse industries and challenging projects.
              </p>
              <p className="text-gray-300">
                I believe great design is invisible - it should feel natural, intuitive, and delightful. Every project is an opportunity to solve real problems and create meaningful connections between users and products.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-900/20 to-cyan-900/10 p-4 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
                >
                  <highlight.icon className="text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <h4 className="text-white font-semibold text-sm mb-1">{highlight.title}</h4>
                  <p className="text-gray-400 text-xs">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-blue-400 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
