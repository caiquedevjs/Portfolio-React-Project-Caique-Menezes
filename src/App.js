/* eslint-disable no-unused-vars */

import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Skills from './components/skills';
import AboutMe from './components/Aboutme';
import Projects from './components/projects';
import React, { useState } from 'react';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="component-container">
          <Intro />
        </div>
        <div className="component-container">
          <AboutMe />
        </div>
        <div className="component-container">
          <Projects />
        </div>
      </header>
    </div>
  );
}

export default App;
