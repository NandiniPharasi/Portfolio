import React, { useEffect } from 'react';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import AboutSection from './pages/AboutSection';
import Projects from './pages/Projects';
import ContactSection from './components/ContactSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-950 text-white">
      <Navbar />

      <section id="home" className="min-h-screen">
        <Home />
      </section>

      <section id="about" className="min-h-screen">
        <AboutSection />
      </section>

      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen">
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
