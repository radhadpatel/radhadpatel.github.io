import React from "react";
import './App.css';
import Navbar from './components/navbar/navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/index';
import About from './pages/about';
import Resume from './pages/resume';


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path='/' exact component={Home}></Route>
//         <Route path='/about' component={About}></Route>
//         <Route path='/resume' component={Resume}></Route>
//       </Switch>
//     </Router>
//   );
// }

export default App;
