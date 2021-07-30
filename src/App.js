import React from "react";
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Footer from './components/footer.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/index';
import About from './pages/about';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Invaders from './pages/invaders';
import Maze from './pages/maze-runner';
import Scheduler from './pages/scheduler';
import Refugee from './pages/refugee';
import Contact from "./pages/contact-me";


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/invaders" component={Invaders} />
          <Route path="/maze-runner" component={Maze} />
          <Route path="/scheduler" component={Scheduler} />
          <Route path="/refugee" component={Refugee} />
          <Route path="/contact-me" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
