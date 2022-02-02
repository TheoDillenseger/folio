import React from 'react';
import '../../App.css';
import PresentationAccueil from '../PresentationAccueil';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Accueil() {
  return (
    <>
      <HeroSection />
      <PresentationAccueil />
      <Footer />
    </>
  );
}

export default Accueil;
