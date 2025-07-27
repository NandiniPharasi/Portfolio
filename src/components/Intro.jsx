import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Intro = () => {
  return (
    <section
      id="home"
      className="bg-gray-950 text-white py-28 px-6 flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-400">
        Hi, I'm Nandini Pharasi
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 mb-6">
        Java Full Stack Developer | Spring Boot · Angular · SQL · React
      </p>

      {/* Social Links */}
      <div className="flex gap-6 mb-6">
        <a
          href="https://github.com/NandiniPharasi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 transition text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/nandinipharasi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 transition text-3xl"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* CTA Button */}
      <a
        href="#projects"
        className="px-6 py-3 bg-teal-600 text-white rounded-xl shadow-md hover:bg-teal-700 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Intro;
