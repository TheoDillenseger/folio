import React from 'react';
import './CardItem.css'

function CardItem(props) {
  return (
    
    <div className='widjet'>
      <h1 className='widjet_title' >{props.titre}</h1>
      <p className='widjet_text'>{props.text1}</p>
      <p className='widjet_text'>{props.text2}</p>
      <p className='widjet_text'>{props.text3}</p>
      <p className='widjet_text'>{props.text4}</p>
      <p className='widjet_text'>{props.text5}</p>
      


      
    </div>    

  );
}

export default CardItem;
/*
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
    */