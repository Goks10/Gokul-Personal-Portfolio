import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Mobile Application',
      category: 'Mobile App Design',
      description: 'Designed a comprehensive e-commerce mobile application with focus on user experience and conversion optimization. The app features intuitive navigation, seamless checkout process, and personalized product recommendations that significantly improved user engagement and sales.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'A/B Testing', 'iOS Design Guidelines'],
      results: ['45% increase in user engagement', '32% higher conversion rate', '23% reduction in cart abandonment', '4.7/5 app store rating'],
      challenges: 'Complex product catalog navigation and streamlined checkout process',
      solution: 'Implemented smart filtering, visual search, and one-click checkout with multiple payment options',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'SaaS Analytics Dashboard',
      category: 'Web Application',
      description: 'Redesigned a complex analytics dashboard for a B2B SaaS platform serving over 10,000 users. Focused on data visualization, workflow optimization, and creating an intuitive interface for enterprise users to make data-driven decisions efficiently.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'Design Systems', 'Data Visualization', 'Usability Testing', 'Responsive Design', 'Accessibility'],
      results: ['60% faster task completion', '40% reduction in support tickets', '25% increase in user satisfaction', '15% increase in feature adoption'],
      challenges: 'Overwhelming data presentation and complex user workflows',
      solution: 'Created modular dashboard with customizable widgets and progressive disclosure of information',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'FinTech Banking Application',
      category: 'Mobile & Web Design',
      description: 'Designed a secure and user-friendly digital banking application with emphasis on trust, security, and accessibility. The design includes features for account management, transactions, investments, and financial planning with a focus on building user confidence.',
      image: 'https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Sketch', 'InVision', 'Security UX', 'Accessibility Design', 'Design Systems', 'Micro-interactions'],
      results: ['95% accessibility compliance', '50% faster onboarding process', '4.8/5 user satisfaction rating', '30% increase in digital adoption'],
      challenges: 'Building trust in digital financial services and ensuring security without compromising usability',
      solution: 'Implemented clear visual hierarchy, security indicators, and guided onboarding with educational content',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Healthcare Telemedicine Platform',
      category: 'Web & Mobile Platform',
      description: 'Designed an end-to-end telemedicine platform connecting patients with healthcare providers. The platform includes appointment booking, video consultations, prescription management, and health tracking features with strict adherence to healthcare regulations.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'Healthcare UX', 'HIPAA Compliance', 'Responsive Design', 'Video Integration', 'Design Systems'],
      results: ['1M+ registered users', '85% appointment completion rate', 'HIPAA compliant design', '92% patient satisfaction score'],
      challenges: 'Ensuring privacy compliance while maintaining intuitive user experience across different user types',
      solution: 'Created role-based interfaces with clear privacy controls and streamlined communication workflows',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'EdTech Learning Management System',
      category: 'Web Application',
      description: 'Designed a comprehensive learning management system for online education with features for course creation, student progress tracking, interactive assessments, and collaborative learning tools. Focused on engagement and knowledge retention.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Adobe XD', 'Educational UX', 'Gamification', 'Responsive Design', 'Accessibility', 'User Testing'],
      results: ['70% improvement in course completion rates', '45% increase in student engagement', '35% reduction in support queries', '4.6/5 instructor satisfaction'],
      challenges: 'Creating engaging learning experiences while maintaining focus and reducing cognitive load',
      solution: 'Implemented gamification elements, progress visualization, and adaptive learning paths',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Food Delivery Mobile App',
      category: 'Mobile App Design',
      description: 'Designed a food delivery application with focus on quick ordering, real-time tracking, and personalized recommendations. The app features restaurant discovery, menu browsing, order customization, and delivery tracking with emphasis on speed and convenience.',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'Mobile UX', 'Real-time Design', 'Location Services', 'Payment Integration', 'Push Notifications'],
      results: ['40% faster ordering process', '55% increase in repeat orders', '25% improvement in delivery accuracy', '4.5/5 app store rating'],
      challenges: 'Simplifying complex ordering process while providing comprehensive customization options',
      solution: 'Created smart defaults with easy customization and visual order confirmation system',
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my best work from 2 years of freelance experience, demonstrating expertise in UI/UX design across various industries and platforms with measurable impact on user experience and business goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.link}
                    className="p-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-white hover:bg-blue-500/40 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    className="p-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-white hover:bg-blue-500/40 transition-colors duration-200"
                  >
                    <Eye size={16} />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-md border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Results & Impact</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-gray-400 text-sm flex items-center">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 pt-2">
                    <div>
                      <h5 className="text-xs font-semibold text-cyan-400 mb-1">Challenge</h5>
                      <p className="text-gray-400 text-xs">{project.challenges}</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-cyan-400 mb-1">Solution</h5>
                      <p className="text-gray-400 text-xs">{project.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;