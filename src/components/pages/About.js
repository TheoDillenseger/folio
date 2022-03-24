import React from 'react';
import '../../App.css';
import PresentationAccueil from '../Presentation/PresentationAccueil';
import HeroSection from '../Header/HeroSection';
import Footer from '../Footer/Footer';
import CardItem from '../Widjet/CardItem';
import ProfileBox from '../profileBox/ProfileBox';

function About() {
  return (
  
    <>
    
     
    <div className='about_container'>
      <CardItem 
        titre="Qui est tu ?" 
        text1="je suis le plus beau de tout les mec yoooooooo dedezd zedz zdf z df zf zf ze fze f zef ze fze fz ef zf zf z fz f zf z fz fzef" 
        text2="je ne vous decevrais pas"/>
      <ProfileBox 
        srcImage="/images/profil.png"/>
      

</div>


    </>
  );
}

export default About;
