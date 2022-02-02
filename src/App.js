import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Accueil from './components/pages/Accueil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Info from './components/pages/Info';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Accueil} />
          <Route path='/services' component={Services} />
          <Route path='/info' component={Info} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
