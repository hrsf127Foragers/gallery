import React from 'react';
import Reviewer from './Reviewer.jsx';

const ModalPhotoDescription = (props) => {
  return (
   <div className="photo-description-wrapper">
     <span className="photo-caption">Actual Food</span><br/>
     <span className="photo-date">January 14, 2020</span>
     <hr className="horizontal-line"/>
     <Reviewer />
   </div>
  )
}

export default ModalPhotoDescription;