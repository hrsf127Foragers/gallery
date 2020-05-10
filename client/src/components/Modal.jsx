import React from 'react';
import ModalGallery from './ModalGallery.jsx';
import ModalSlider from './ModalSlider.jsx';

const Modal = React.forwardRef((props, ref) => {
  const showClassName = props.showModal ? "modal display-block" : "modal display-none";
  return (
    <div className={showClassName}>
      <div className="close-button" onClick={props.handleModalCloseButtonClick}>Close X</div>
        <div className="modal-container">
        <ModalGallery photos={props.photos} modalPhoto={props.modalPhoto} handleModalLeftArrowClick={props.handleModalLeftArrowClick} handleModalRightArrowClick={props.handleModalRightArrowClick}/>
        <ModalSlider photos={props.photos} photoId={props.photoId} handleSliderClick={props.handleSliderClick} ref={ref}/>
      </div>
    </div>
  )
})

export default Modal;

