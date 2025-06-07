import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Lioscaterers',
      category: 'Event & Catering Website',
      description:
        'A vibrant website design for Lioscaterers, focusing on elegant presentation of catering services and event management with seamless navigation and appetizing visuals.',
      technologies: ['Figma', 'React', 'Responsive Design', 'SEO'],
      link: 'https://lios-caterers.netlify.app/',
      github: '#',
    },
    {
      id: 2,
      title: 'Zeenath Taj Gardens',
      category: 'Event Venue Website',
      description:
        'Clean and sophisticated design tailored for Zeenath Taj Gardens, showcasing their venue’s grandeur with high-quality images, event details, and booking capabilities.',
      technologies: ['Adobe XD', 'JavaScript', 'UI Design', 'Booking System'],
      link: 'https://zeenathtajgardens.netlify.app/',
      github: '#',
    },
    {
      id: 3,
      title: 'Felix Flowers',
      category: 'Floral Shop Website',
      description:
        'Bright and colorful UI/UX design for Felix Flowers to promote floral arrangements, seasonal offers, and online orders with intuitive browsing and checkout.',
      technologies: ['Figma', 'React', 'E-commerce', 'Responsive Design'],
      link: 'https://felixflowers.netlify.app/',
      github: '#',
    },
    {
      id: 4,
      title: 'VJ Events',
      category: 'Event Management Website',
      description:
        'A dynamic and professional site for VJ Events highlighting event portfolios, client testimonials, and service offerings to attract new customers.',
      technologies: ['Adobe XD', 'React', 'UI/UX', 'Client Testimonials'],
      link: 'https://vjevents.in/',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my best work from 2 years of freelance experience, demonstrating expertise in UI/UX
            design across various industries and platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 overflow-hidden"
            >
              <div className="bg-gray-800 p-6 rounded-t-2xl text-left">
                <span className="px-3 py-1 bg-blue-500/80 text-white text-sm font-medium rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies Used</h4>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
