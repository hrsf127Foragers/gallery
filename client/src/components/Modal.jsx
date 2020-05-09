import React from 'react';
import ModalPhotoGallery from './ModalPhotoGallery.jsx';

const Modal = (props) => {
  const showClassName = props.showModal ? "modal display-block" : "modal display-none";
  return (
    <div className={showClassName}>
      <div className="close-button" onClick={props.handleModalCloseButtonClick}>Close X</div>
        <div className="modal-container">
        <ModalPhotoGallery photos={props.photos} modalPhoto={props.modalPhoto} handleModalLeftArrowClick={props.handleModalLeftArrowClick} handleModalRightArrowClick={props.handleModalRightArrowClick}/>
      </div>
    </div>
  )
}

export default Modal;

