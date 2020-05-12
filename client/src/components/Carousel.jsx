import React from 'react';
import CarouselImage from './CarouselImage.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import ArrowRight from './ArrowRight.jsx';
import styles from './carousel.css';

const Carousel = React.forwardRef((props, ref) => {
  return(
    <div className={styles.carousel_container}>
      <ArrowLeft glyph="&#10094;" clickFunction={props.carouselLeftArrowClick} />
      <div className={styles.image_wrapper} ref={ref}>
          {props.photos.map((photo, index) => {
            return <CarouselImage key={index} id={index} photo={photo} handleCarouselPictureClick={props.handleCarouselPictureClick} />
          })}
      </div>
      <ArrowRight glyph="&#10095;" clickFunction={props.carouselRightArrowClick}/>
    </div>
  )
})

export default Carousel;