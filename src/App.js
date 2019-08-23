import React, { Component } from 'react';
import { setLanguage, translate } from 'react-multi-lang';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

class App extends Component {
  
  changeLanguage(language) {
    setLanguage(language);
  }

  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <Header />
          <section id="intro" className="Intro">
            <button onClick={() => this.changeLanguage('en')}>en</button>
            <button onClick={() => this.changeLanguage('lotr')}>lotr</button>
          </section>
          <section id="projects" className="Projects">
            projects
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
}

export default translate(App);
