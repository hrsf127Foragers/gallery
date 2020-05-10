import React from 'react';
import ModalLeft from './ModalLeft.jsx';
import ModalRight from './ModalRight.jsx';

const Modal = React.forwardRef((props, ref) => {
  const showClassName = props.showModal ? "modal display-block" : "modal display-none";
  return (
    <div className={showClassName}>
      <div className="modal-container">
        <div className="close-button" onClick={props.handleModalCloseButtonClick}>Close X</div>
        <ModalLeft photos={props.photos} modalPhoto={props.modalPhoto} handleModalLeftArrowClick={props.handleModalLeftArrowClick} handleModalRightArrowClick={props.handleModalRightArrowClick}/>
        <ModalRight photos={props.photos} photoId={props.photoId} handleSliderClick={props.handleSliderClick} ref={ref}/>
      </div>
    </div>
  )
})

export default Modal;

