import React from 'react';
import { Smartphone, Monitor, Palette, Search, Users, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Design',
      description: 'Native iOS and Android app designs focused on user experience and platform-specific guidelines with emphasis on usability and engagement.',
      features: ['iOS & Android Design', 'Responsive Layouts', 'Touch Interactions', 'App Store Guidelines', 'User Flow Optimization', 'Accessibility Standards'],
    },
    {
      icon: Monitor,
      title: 'Web Application Design',
      description: 'Comprehensive web app designs including dashboards, SaaS platforms, and complex user interfaces with focus on functionality and user experience.',
      features: ['Responsive Design', 'Dashboard Design', 'SaaS Platforms', 'Admin Panels', 'Data Visualization', 'Cross-browser Compatibility'],
    },
    {
      icon: Palette,
      title: 'Design Systems & Branding',
      description: 'Complete design systems with components, style guides, and documentation for consistent branding across all digital touchpoints.',
      features: ['Component Libraries', 'Style Guides', 'Brand Guidelines', 'Documentation', 'Design Tokens', 'Scalable Architecture'],
    },
    {
      icon: Search,
      title: 'UX Research & Testing',
      description: 'User research, usability testing, and data-driven insights to optimize your product and improve user satisfaction and conversion rates.',
      features: ['User Research', 'Usability Testing', 'A/B Testing', 'Analytics Review', 'User Interviews', 'Competitive Analysis'],
    },
    {
      icon: Users,
      title: 'UX Consultation & Strategy',
      description: 'Strategic UX consultation to identify opportunities, improve existing products, and create user-centered design strategies for business growth.',
      features: ['UX Audits', 'Strategy Planning', 'Competitor Analysis', 'Recommendations', 'Roadmap Planning', 'Team Training'],
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping & Wireframing',
      description: 'Quick interactive prototypes and wireframes to validate ideas, test concepts, and communicate design solutions before development.',
      features: ['Interactive Prototypes', 'Clickable Mockups', 'Animation Design', 'User Flows', 'Low-fi Wireframes', 'High-fi Prototypes'],
    },
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive UI/UX design services tailored to help your business create exceptional digital experiences that drive growth, user satisfaction, and measurable business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">What's Included</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6">
              Every project is unique and I offer flexible solutions tailored to your specific needs, timeline, and budget. Let's discuss how I can help bring your vision to life through exceptional design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Start a Project
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-black transition-all duration-300"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;