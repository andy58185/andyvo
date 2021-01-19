import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects.js';
import About from './components/pages/About.js';
import Resume from './components/pages/Resume.js';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/andyvo' exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/resume" exact component={Resume} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
