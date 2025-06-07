import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-blue-500/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Portfolio
          </div>
          
          {/* <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500 fill-current" size={16} />
            <span>by a passionate UI/UX Designer</span>
          </div> */}

          <div className="text-gray-400 text-sm">
            © 2024 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;