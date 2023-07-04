import React from 'react';
import './App.css';
import Header from './components/Header';
import Biography from './components/Biography';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <Header />
      <Biography />
      <Contacts />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
