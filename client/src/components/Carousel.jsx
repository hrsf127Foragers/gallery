import React from 'react';
import CarouselImage from './CarouselImage.jsx';
import Arrow from './Arrow.jsx';

const Carousel = React.forwardRef((props, ref) => {
  return(
    <div className="carousel-container">
      <Arrow direction="left" glyph="&#10094;" clickFunction={props.carouselLeftArrowClick} />
      <div className="image-wrapper" ref={ref}>
          {props.photos.map((photo, index) => {
            return <CarouselImage key={index} id={index} photo={photo} handleCarouselPictureClick={props.handleCarouselPictureClick} />
          })}
      </div>
      <Arrow direction="right" glyph="&#10095;" clickFunction={props.carouselRightArrowClick}/>
    </div>
  )
})

export default Carousel;