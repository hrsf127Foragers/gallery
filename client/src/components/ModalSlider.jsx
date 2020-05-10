import React from 'react';
import ModalSliderImage from './ModalSliderImage.jsx';

const ModalSlider = React.forwardRef((props, ref) => {
  return (
    <div className="modal-slider-container">
      <div className="restaurant-name">Photos for Taco Boys</div>
        <div className="slider-image-wrapper" ref={ref}>
          {props.photos.map((photo, index) => {
            return <ModalSliderImage key={index} id={index} photo={photo} photoId={props.photoId} handleSliderClick={props.handleSliderClick} />
          })}
        </div>
    </div>
  )
})

export default ModalSlider;