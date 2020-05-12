import React from 'react';
import styles from './modalsliderimage.css';

const ModalSliderImage = (props) => {
  return (
      <img className={(props.photoId === props.id ? styles.modal_slider_image_highlight : styles.modal_slider_image)} src={props.photo} id={props.id} onClick={props.handleSliderClick}></img>
  )
}

export default ModalSliderImage;