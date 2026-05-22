import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Github from './sections/Github';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Architecture from './sections/Architecture';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HelmetProvider>
      <div className="relative w-full">
        <Helmet>
          <title>Mahesh Dadwal | Full Stack Developer</title>
          <meta name="description" content="Portfolio of Mahesh Dadwal, Full Stack Developer building scalable web applications." />
        </Helmet>
        
        {/* Global UI Elements */}
        <motion.div 
          style={{ scaleX, transformOrigin: "0%" }}
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-primary to-accent-teal z-[9999]"
        />
        <div className="grid-bg"></div>
        <div className="noise"></div>
        
        <Navbar />
        
        <main className="relative z-10 flex flex-col items-center w-full">
          <Hero />
          <Projects />
          <Architecture />
          <Skills />
          <Experience />
          <Github />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
