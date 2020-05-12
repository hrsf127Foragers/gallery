import React from 'react';
import styles from './modalgalleryarrowleft.css';

const ModalGalleryArrowLeft = (props) => {
  return (
      <a className={styles.modal_arrow_left} onClick={props.clickFunction}>{props.glyph}</a>
  )
}

export default ModalGalleryArrowLeft;