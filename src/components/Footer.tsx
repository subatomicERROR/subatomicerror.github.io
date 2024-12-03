import React from 'react';
import { Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/subatomicERROR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://instagram.com/subatomicERROR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://instagram.com/xyashhxx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-2">
                <Instagram size={24} />
                <span className="text-sm">Personal</span>
              </span>
            </a>
          </div>
          <p className="text-gray-400 text-center">
            Created by subatomicERROR (Yash Ramtele)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;