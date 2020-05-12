import React from 'react';
import styles from './modalgalleryarrowright.css';

const ModalGalleryArrowRight = (props) => {
  return (
      <a className={styles.modal_arrow_right} onClick={props.clickFunction}>{props.glyph}</a>
  )
}

export default ModalGalleryArrowRight;