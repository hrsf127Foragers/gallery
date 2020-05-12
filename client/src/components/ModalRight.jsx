import React from 'react';
import ModalSlider from './ModalSlider.jsx';
import styles from './modalright.css';

const ModalRight = React.forwardRef((props, ref) => {
  return (
    <div className={styles.modal_right_wrapper}>
      <ModalSlider photos={props.photos} photoId={props.photoId} handleSliderClick={props.handleSliderClick} ref={ref}/>
    </div>
  )
})

export default ModalRight;
