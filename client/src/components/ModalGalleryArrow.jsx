import React from 'react';

const ModalGalleryArrow = (props) => {
  return (
      <a className={`modal-arrow-${props.direction}`} onClick={props.clickFunction}>{props.glyph}</a>
  )
}

export default ModalGalleryArrow;