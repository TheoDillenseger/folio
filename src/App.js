import React from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Works from './components/pages/Works';
import Info from './components/pages/Info';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/services' component={Works} />
          <Route path='/info' component={Info} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
