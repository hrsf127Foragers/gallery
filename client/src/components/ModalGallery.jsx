import React from 'react';
import ModalGalleryImage from './ModalGalleryImage.jsx';
import ModalGalleryArrow from './ModalGalleryArrow.jsx';

const ModalGallery = (props) => {
  return (
    <div className="modal-photo-gallery">
      <ModalGalleryArrow direction="left" clickFunction={props.handleModalLeftArrowClick} glyph="&#10094;"/>
      <ModalGalleryImage photos={props.photos} modalPhoto={props.modalPhoto} />
      <ModalGalleryArrow direction="right" clickFunction={props.handleModalRightArrowClick} glyph="&#10095;"/>
    </div>
  )
}

export default ModalGallery;