import React from 'react';

const ModalSliderImage = (props) => {
  return (
      <img className={`modal-slider-image ${props.photoId === props.id ? 'highlight' : ''}`} src={props.photo} id={props.id} onClick={props.handleSliderClick}></img>
  )
}

export default ModalSliderImage;