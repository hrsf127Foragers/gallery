import React from 'react';
import styles from './carouselimage.css';

const CarouselImage = (props) => {
  return (
    <div>
      <img className={styles.carousel_image} id={props.id} src={props.photo} onClick={props.handleCarouselPictureClick}></img>
    </div>
  )
}

export default CarouselImage;