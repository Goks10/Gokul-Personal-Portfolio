import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'uixgokul@gmail.com',
      link: 'mailto:uixgokul@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98439 62749',
      link: 'tel:+919843962749',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'India',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/gokulk', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/gokulk', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/gokulk', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your digital presence? I'm here to help bring your vision to life through exceptional UI/UX design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="Project Subject"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. Whether you have a project in mind or just want to chat about design, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-300">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-lg flex items-center justify-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 p-6 rounded-xl border border-blue-500/30">
              <h4 className="text-white font-semibold mb-2">Available for Freelance</h4>
              <p className="text-gray-300 text-sm">
                I'm currently available for new projects and collaborations. Let's create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;