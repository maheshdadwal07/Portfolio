import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
        <Helmet>
          <title>Mahesh Dadwal | Full Stack Developer</title>
          <meta name="description" content="Portfolio of Mahesh Dadwal, Full Stack Developer building scalable web applications." />
        </Helmet>
        
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
