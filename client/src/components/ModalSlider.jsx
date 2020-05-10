import React from 'react';
import ModalSliderImage from './ModalSliderImage.jsx';

const ModalSlider = (props) => {
  return (
    <div className="modal-slider-container">
      <div className="restaurant-name">Photos for Taco Boys</div>
      {props.photos.map((photo, index) => {
        return <ModalSliderImage key={index} id={index} photo={photo} handleSliderClick={props.handleSliderClick} />
      })}
    </div>
  )
}

export default ModalSlider;