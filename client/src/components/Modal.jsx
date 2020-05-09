import React from 'react';
import ModalImage from './ModalImage.jsx';

const Modal = (props) => {
  const showClassName = props.showModal ? "modal display-block" : "modal display-none";
  return (
    <div className={showClassName}>
      <button className="close-button" onClick={props.handleModalCloseButtonClick}>Close</button>
      <div className="modal-container">
        <ModalImage photos={props.photos} />
      </div>
    </div>
  )
}

export default Modal;