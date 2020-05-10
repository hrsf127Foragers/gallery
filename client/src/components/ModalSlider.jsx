import React from 'react';
import ModalSliderImage from './ModalSliderImage.jsx';

const ModalSlider = (props) => {
  return (
    <div>
      {props.photos.map((photo, index) => {
        return <ModalSliderImage key={index} id={index} photo={photo} />
      })}
    </div>
  )
}

export default ModalSlider;