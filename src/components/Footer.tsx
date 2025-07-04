import React from 'react';
import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Charan Bendalam</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-8 max-w-md mx-auto">
              Frontend Developer passionate about creating beautiful, functional web experiences.
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/Charanbendalam71"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/charan-bendalam-743b85290"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/i_charan1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-pink-400 transform hover:scale-110 transition-all duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:charan_bendalam@srmap.edu.in"
                className="text-gray-400 dark:text-gray-500 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
              <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center justify-center gap-2">
                © {currentYear} Charan Bendalam. Made with <Heart size={16} className="text-red-500" /> and React.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;