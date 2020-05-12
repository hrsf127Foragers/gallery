import React from 'react';
import ModalSliderImage from './ModalSliderImage.jsx';
import styles from './modalslider.css';

const ModalSlider = React.forwardRef((props, ref) => {
  return (
    <div className={styles.modal_slider_container}>
      <div className={styles.restaurant_name}>
        <h3>Photos For {props.restaurantName}
        </h3>
      </div>
      <div className={styles.slider_image_wrapper} ref={ref}>
        {props.photos.map((photo, index) => {
          return <ModalSliderImage key={index} id={index} photo={photo} photoId={props.photoId} handleSliderClick={props.handleSliderClick} />
        })}
      </div>
    </div>
  )
})

export default ModalSlider;