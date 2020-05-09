import React from 'react';
import ModalImage from './ModalImage.jsx';

const Modal = (props) => {
  const showClassName = props.showModal ? "modal display-block" : "modal display-none";
  return (
    <div className={showClassName}>
      <div className="close-button" onClick={props.handleModalCloseButtonClick}>Close X</div>
      <div className="modal-container">
        <ModalImage photos={props.photos} modalPhoto={props.modalPhoto}/>
      </div>
    </div>
  )
}

export default Modal;