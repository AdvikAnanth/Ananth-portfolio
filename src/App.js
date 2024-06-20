import React from 'react';
import Header from './components/Header'; 
import Home from './components/Home';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';

import './App.css';
const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <Education/>
            <Project/>
            <Contact/>
        </div>
    );
};

export default App;

