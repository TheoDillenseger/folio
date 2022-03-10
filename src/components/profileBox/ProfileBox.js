import React from 'react';
import './ProfileBox.css'

function ProfileBox(props) {
  return (
    
    <div className='profileBox'>
      <img className='profileBox_image'src={props.srcImage} />
      


      
    </div>    

  );
}

export default ProfileBox;