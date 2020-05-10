import React from 'react';
import ModalGallery from './ModalGallery.jsx';
import ModalSlider from './ModalSlider.jsx';

const Modal = (props) => {
  const showClassName = props.showModal ? "modal display-block" : "modal display-none";
  return (
    <div className={showClassName}>
      <div className="close-button" onClick={props.handleModalCloseButtonClick}>Close X</div>
        <div className="modal-container">
        <ModalGallery photos={props.photos} modalPhoto={props.modalPhoto} handleModalLeftArrowClick={props.handleModalLeftArrowClick} handleModalRightArrowClick={props.handleModalRightArrowClick}/>
        <ModalSlider photos={props.photos} handleSliderClick={props.handleSliderClick}/>
      </div>
    </div>
  )
}

export default Modal;

