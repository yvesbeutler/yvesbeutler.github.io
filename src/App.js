import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <Header />
        <section id="intro" className="Intro">
          intro
        </section>
        <section id="projects" className="Projects">
          projects
          <p>just some stuff here..</p>
        </section>
        <section id="about" className="About">
          about
        </section>
        <section id="contact" className="Contact">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
