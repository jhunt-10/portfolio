import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion';

import Navbar from './components/Navbar';
import FloatingButton from './components/FloatingButton';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [globalMouseX, setGlobalMouseX] = useState(0);
  const [globalMouseY, setGlobalMouseY] = useState(0);


  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const isHomeInView = useInView(homeRef, { amount: 0.5});
  const isAboutInView = useInView(aboutRef, { amount: 0.5});
  const isProjectsInView = useInView(projectsRef, { amount: 0.5});
  const isContactInView = useInView(contactRef, { amount: 0.5 }); 

  useEffect(() => {
      const handleGlobalMouseMove = (event) => {
        setGlobalMouseX(event.clientX);
        setGlobalMouseY(event.clientY)
      };

      window.addEventListener('mousemove', handleGlobalMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove);
      };
    }, []); 

  useEffect(() => {
    if (isContactInView) {
      setActiveSection('contact');
  } else if (isProjectsInView) {
      setActiveSection('projects');
    } else if (isAboutInView) {
      setActiveSection('about');
    } else if (isHomeInView) {
      setActiveSection('home');
    }
  }, [isHomeInView, isAboutInView, isProjectsInView, isContactInView]);

  const sections = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const handleNavClick = (sectionId) => {
    const ref = sections[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans">
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />
      
      <FloatingButton 
        visible={!isContactInView} 
        onClick={() => handleNavClick('contact')} 
      />

      <main>
        <Home ref={homeRef}  globalMouseX={globalMouseX} globalMouseY={globalMouseY}/>
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
    </div>
  );
}

export default App;