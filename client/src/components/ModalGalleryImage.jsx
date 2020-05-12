import React from 'react';
import styles from './modalgalleryimage.css';

const ModalGalleryImage = (props) => {
  return (
      <img className={styles.modal_image} src={props.modalPhoto}></img>
  )
}

export default ModalGalleryImage;