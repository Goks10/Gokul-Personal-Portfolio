import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'uixgokul@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9843962749',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Dharapuram, Tiruppur, Tamil Nadu',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      {/* Heading */}
      <div className="text-center mb-16 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Work{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Together
          </span>
        </h2>
        <p className="text-xl text-gray-300">
          Ready to transform your digital presence? I'm here to help bring your vision to life through
          exceptional UI/UX design.
        </p>
      </div>

      {/* Get In Touch Box */}
      <div className="max-w-xl w-full p-8 bg-gray-800/20 backdrop-blur-md rounded-2xl border border-gray-500/30 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
        <p className="text-gray-300 mb-8">
          I'm always excited to work on new projects and collaborate with amazing people. Whether you have a
          project in mind or just want to chat about design, feel free to reach out!
        </p>

        <div className="space-y-6 max-w-md mx-auto">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-gray-500/20 hover:border-blue-400 transition-all duration-300 group mx-auto max-w-sm"
            >
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <info.icon className="text-white" size={20} />
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold">{info.title}</h4>
                <p className="text-gray-300">{info.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-gray-500/20 max-w-md mx-auto mt-10">
          <h4 className="text-white font-semibold mb-2">Available for Freelance</h4>
          <p className="text-gray-300 text-sm">
            I'm currently available for new projects and collaborations. Let's create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
