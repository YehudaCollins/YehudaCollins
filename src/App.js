import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Stats from './components/Stats';
import RandomFacts from './components/RandomFacts';

function App() {
  React.useEffect(() => {
    // GSAP Animations
  }, []);

  return (
    <div className="yy">
      <div className="relative">
        <div id="background-overlay"></div>
        <div className="animated-shapes">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`shape shape-${i + 1}`} />
          ))}
        </div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Home />
          <About />
          <RandomFacts />
          <Skills />
          <Work></Work>
          <Stats />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
