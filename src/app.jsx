import React from 'react';
import './styles/global.css';

import BgCanvas    from './components/BgCanvas';
import Navbar       from './components/Navbar';
import Home         from './components/Home';
import About        from './components/About';
import Education    from './components/Education';
import Experience   from './components/Experience';
import Skills       from './components/Skills';
import Projects     from './components/Projects';
import Certifications from './components/Certifications';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  return (
    <>
      <BgCanvas />
      <Navbar />
      <main>
        <Home />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
