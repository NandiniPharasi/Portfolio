import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import profile from '../assets/avatar.png';

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gray-950 text-white py-28 px-6 flex flex-col justify-center items-center text-center"
    >
      {/* Profile Picture */}
      <img
        src={profile}
        alt="Nandini Avatar"
        className="w-32 h-32 rounded-full mb-6 border-4 border-teal-400 shadow-lg"
      />

      {/* Name Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        👋 Hi, I'm <span className="text-teal-400">Nandini Pharasi</span>
      </h1>

      {/* Type Animation Titles */}
      <TypeAnimation
        sequence={[
          'Java Developer 💻', 1500,
          'Full Stack Engineer 🚀', 1500,
          'Spring Boot Enthusiast 🌱', 1500,
          'Angular Developer 🅰️', 1500,
          'React Frontend Explorer ⚛️', 1500,
          
          
        ]}
        wrapper="span"
        speed={50}
        className="text-xl md:text-2xl font-semibold text-white mb-6"
        repeat={Infinity}
      />

      {/* Social Icons */}
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
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        🔍 View My Work
      </a>
    </section>
  );
};

export default Home;
