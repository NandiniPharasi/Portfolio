import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'JukeBox',
      description:
        'A music streaming app built using Spring Boot and MySQL. Supports playlist, favorites, and role-based access.',
      tech: ['Spring Boot', 'Hibernate', 'MySQL'],
      github: 'https://github.com/yourusername/jukebox',
    },
    {
      title: 'FrostCart',
      description:
        'Full Stack platform for icecream services. Role-based access, JWT auth, and REST APIs.',
      tech: ['Spring Boot', 'Microservices', 'Spring Security', 'Spring REST', 'Core Java','Angular', 'Postman', 'TypeScript'],
      github: 'https://github.com/NandiniPharasi/FrostCart',
    },
    {
      title: 'Portfolio Website',
      description: 'This responsive portfolio is built using React and Tailwind CSS.',
      tech: ['React', 'Tailwind CSS', 'NodeJs'],
      github: 'https://github.com/yourusername/portfolio',
    },
    {
      title: 'DrumTunes',
      description: 'A fun and interactive drum kit web app. Click or press keys to play drum sounds in real time.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/nandinipharasi/DrumTunes',
      live: 'https://nandinipharasi.github.io/DrumTunes/',
    }
  ];

  return (
    <section id="projects" className="bg-gray-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-4">My Projects</h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Explore a few of the projects I've built with passion and precision.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-800/40 backdrop-blur-md border border-teal-600/30 rounded-2xl p-6 shadow-md hover:shadow-teal-400/40 hover:-translate-y-1 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-teal-300 mb-2">{project.title}</h3>

              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-700 text-white text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-teal-400 hover:text-white transition"
                  >
                    <FaGithub className="inline" /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-teal-400 hover:text-white transition"
                  >
                    <FaExternalLinkAlt className="inline" /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
