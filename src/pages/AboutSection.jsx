import React from 'react';
import { FaLaptopCode, FaRocket, FaTools } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white py-20 px-6 flex flex-col items-center text-center"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-8 text-teal-400">
        👩‍💻 About Me
      </h2>

      {/* About Text */}
      <div className="max-w-4xl">
        <p className="text-lg md:text-xl text-gray-300 leading-8 mb-6">
          I'm <span className="text-teal-400 font-semibold">Nandini Pharasi</span>, a passionate and committed
          <span className="text-white font-bold"> Java Full Stack Developer</span> with hands-on experience in building robust and scalable web applications. I specialize in
          <span className="text-white font-semibold"> Spring Boot</span> for backend development and <span className="text-white font-semibold">angular & React.js</span> for dynamic and modern UIs.
        </p>

        <p className="text-lg md:text-xl text-gray-300 leading-8 mb-6">
          With a deep understanding of RESTful APIs, JWT security, and microservice architecture, I thrive in Agile teams and love solving complex problems that make products faster, smarter, and more efficient. Whether it's building authentication services, integrating databases with JPA & Hibernate, or designing clean frontend interfaces.
        </p>

       <p className="text-lg md:text-xl text-gray-300 leading-8 mb-6">
  I’ve worked on impactful projects like a <span className="text-white font-semibold">music streaming platform (JukeBox)</span> and an <span className="text-white font-semibold">eCommerce app (FrostCart)</span> owning the backend, security, and frontend integration. I’m a continuous learner, currently exploring cloud services (GCP/Azure) and DevOps workflows.
</p>

<p className="text-lg md:text-xl text-gray-300 leading-8 mb-6">
  Beyond coding, I enjoy playing ♟️ <span className="text-white font-semibold">chess</span> to sharpen my strategy skills and ✈️ <span className="text-white font-semibold">traveling</span> to explore new cultures and fuel creativity.
</p>

      </div>

      {/* Highlight Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Backend */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-teal-500/50 transition">
          <FaLaptopCode className="text-teal-400 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">Backend Expertise</h3>
          <p className="text-gray-400">
            Spring Boot, REST APIs, Spring security, Spring MVC, JPA, Hibernate, MySQL/PostgreSQL, Microservices
          </p>
        </div>

        {/* Frontend */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-teal-500/50 transition">
          <FaRocket className="text-teal-400 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">Frontend Skills</h3>
          <p className="text-gray-400">
            Angular, React.js, Tailwind CSS, HTML5, JavaScript, Responsive UI/UX, Animations
          </p>
        </div>

        {/* Tools */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-teal-500/50 transition">
          <FaTools className="text-teal-400 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">Tools & Workflow</h3>
          <p className="text-gray-400">
            GitHub, Postman, VSCode, IntelliJ, Agile/Scrum, Unit Testing (JUnit), Docker
          </p>
        </div>
      </div>

      {/* Final CTA */}
     <a
  href="https://www.linkedin.com/in/nandinipharasi/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-12 inline-block bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
>
  📩 Let's Connect on LinkedIn
</a>

    </section>
  );
};

export default About;
