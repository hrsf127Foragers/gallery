import React from 'react';
import styles from './modalsliderimage.css';

const ModalSliderImage = (props) => {
  return (
      <img className={`${styles.modal_slider_image} ${props.photoId === props.id ? styles.highlight : ''}`} src={props.photo} id={props.id} onClick={props.handleSliderClick}></img>
  )
}

export default ModalSliderImage;