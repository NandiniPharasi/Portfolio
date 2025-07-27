import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text */}
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} Nandini Pharasi. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/NandiniPharasi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/nandinipharasi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition text-xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
