import React from 'react';
import ModalGallery from './ModalGallery.jsx';
import ModalPhotoDescription from './ModalPhotoDescription.jsx';

const ModalLeft = (props) => {
  return (
    <div className="modal-left-wrapper">
      <ModalGallery photos={props.photos} modalPhoto={props.modalPhoto} handleModalLeftArrowClick={props.handleModalLeftArrowClick} handleModalRightArrowClick={props.handleModalRightArrowClick}/>
      <ModalPhotoDescription />
    </div>
  )
}

export default ModalLeft;
