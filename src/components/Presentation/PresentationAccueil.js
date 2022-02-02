import React from 'react';
import './PresentationAccueil.css';
import CardItem from '../Widjet/CardItem';

function PresentationAccueil() {
  return (
    <div className='presentationAccueil'>
      <h1>Mes competence : </h1>
      <div className='cards__container'>
          <ul className='cards__items'>
            <CardItem
              src='images/creation-site-web.png'
              titre='Création de site web'
              text={<div><p>Vous avez besoin d'un site personalisable, rapide, dynamique a votre budjet </p>
                          <p>Vous etes ou bonne endroit !</p>
                          <p>Je participe a la création de site en tout genre :</p><br/>
                          <ul>
                            <li>Cite Vitrine</li>
                            <li>Site de E-Comerce</li>
                            <li>site personnelle</li>
                            </ul>
                          <br/>
                          <p>Afin que le site soit le plus rapide et dynamique possible j'utilise les nouvelles technologie t-elle que React, NodesJS , MongoDB</p></div>}
              label='Adventure'
              path='/services'
              direction={true}
            />
            <CardItem
              titre={"création d'application PWA"}
              src='images/pwa.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
              direction={false}
            />
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
              direction={true}
            />
          </ul>
      </div>
    </div>
  );
}

export default PresentationAccueil;
