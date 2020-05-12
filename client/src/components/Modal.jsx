import React from 'react';
import ModalLeft from './ModalLeft.jsx';
import ModalRight from './ModalRight.jsx';
import styles from './modal.css';

const Modal = React.forwardRef((props, ref) => {
  const showClassName = props.showModal ? styles.modal_display_block : styles.display_none;
  return (
    <div className={showClassName}>
      <div className={styles.modal_container}>
        <div className={styles.close_button} onClick={props.handleModalCloseButtonClick}>Close X</div>
        <ModalLeft photos={props.photos} modalPhoto={props.modalPhoto} handleModalLeftArrowClick={props.handleModalLeftArrowClick} handleModalRightArrowClick={props.handleModalRightArrowClick}/>
        <ModalRight photos={props.photos} photoId={props.photoId} restaurantName={props.restaurantName} handleSliderClick={props.handleSliderClick} ref={ref}/>
      </div>
    </div>
  )
})

export default Modal;

