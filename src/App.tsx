import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Submodules from './components/Submodules';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Submodules />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;