import React from 'react';
import ModalImage from './ModalImage.jsx';

const Modal = (props) => {
  const showClassName = props.showModal ? "modal display-block" : "modal display-none";
  return (
    <div className={showClassName}>
      <div className="modal-container">
        <button className="close-button" onClick={props.handleModalCloseButtonClick}>Close</button>
        <ModalImage photos={props.photos} />
      </div>
    </div>
  )
}

export default Modal;