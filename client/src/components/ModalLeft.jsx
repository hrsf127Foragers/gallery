import React from 'react';
import ModalGallery from './ModalGallery.jsx';
import ModalPhotoDescription from './ModalPhotoDescription.jsx';
import styles from './modalleft.css';

const ModalLeft = (props) => {
  return (
    <div className={styles.modal_left_wrapper}>
      <ModalGallery photos={props.photos} modalPhoto={props.modalPhoto} handleModalLeftArrowClick={props.handleModalLeftArrowClick} handleModalRightArrowClick={props.handleModalRightArrowClick}/>
      <ModalPhotoDescription />
    </div>
  )
}

export default ModalLeft;
