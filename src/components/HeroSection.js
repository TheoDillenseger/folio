import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className="profil-image" src='images/profil.png' alt="profil"
      height="200px" 
      width="200px" />
      <h1>DILLENSEGER THEO</h1>
      <p>Devellopeur freelance a strasbourg</p>
    </div>
  );
}

export default HeroSection;
