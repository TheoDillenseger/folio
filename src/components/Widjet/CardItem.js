import React from 'react';
import './CardItem.css'

function CardItem(props) {
  return (
    <>
      <li className={props.direction ? 'cards__item' : 'cards__item__reverse'}> 
          <div className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </div>
          <div className='cards__item__info'>
            <h1 className='cards__item__titre'> {props.titre}</h1>
            <div className='cards__item__text'>
              {props.text}
              </div>
          </div>
        
      </li>
    </>
  );
}

export default CardItem;
