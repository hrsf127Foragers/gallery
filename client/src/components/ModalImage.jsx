import React from 'react';

const ModalImage = (props) => {
  return (
    <div>
      <img className="modal-image" src={props.modalPhoto}></img>
    </div>
  )
}

export default ModalImage;