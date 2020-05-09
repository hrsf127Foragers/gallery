import React from 'react';

const ModalImage = (props) => {
  return (
    <div>
      <img className="modal-image" src={props.photos[0]}></img>
    </div>
  )
}

export default ModalImage;