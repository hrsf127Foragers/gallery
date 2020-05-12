import React from 'react';
import ModalGalleryImage from './ModalGalleryImage.jsx';
import ModalGalleryArrowLeft from './ModalGalleryArrowLeft.jsx';
import ModalGalleryArrowRight from './ModalGalleryArrowRight.jsx';
import styles from './modalgallery.css';

const ModalGallery = (props) => {
  return (
    <div className={styles.modal_photo_gallery}>
      <ModalGalleryArrowLeft clickFunction={props.handleModalLeftArrowClick} glyph="&#10094;"/>
      <ModalGalleryImage photos={props.photos} modalPhoto={props.modalPhoto} handleSliderClick={props.handleSliderClick}/>
      <ModalGalleryArrowRight clickFunction={props.handleModalRightArrowClick} glyph="&#10095;"/>
    </div>
  )
}

export default ModalGallery;