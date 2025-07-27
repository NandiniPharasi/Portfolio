{projects.map((project, index) => (
  <div
    key={index}
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-gray-800/40 backdrop-blur-sm border border-teal-700/40 rounded-2xl p-6 shadow-lg hover:shadow-teal-400/40 transform hover:scale-105 transition duration-300"
  >
    <h3 className="text-xl font-bold text-teal-300 mb-3">{project.title}</h3>

    <p className="text-gray-300 mb-4">{project.description}</p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tech, idx) => (
        <span
          key={idx}
          className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-xs font-semibold px-2 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-4">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-teal-400 hover:text-white underline"
        >
          GitHub →
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-cyan-400 hover:text-white underline"
        >
          Live Demo →
        </a>
      )}
    </div>
  </div>
))}
