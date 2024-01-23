/* eslint-disable no-unused-vars */

import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Skills from './components/skills';
import AboutMe from './components/Aboutme';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Intro/>
        <AboutMe/>
        <Projects/>
       
        
      </header>
    </div>
  );
}

export default App;
