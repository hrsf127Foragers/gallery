import React from 'react';
import CarouselImage from './CarouselImage.jsx';
import Arrow from './Arrow.jsx';

const Carousel = React.forwardRef((props, ref) => {
  // console.log(props.mainPhotos);
  return(
    <div className="carousel-container">
      <Arrow direction="left" glyph="&#10094;" clickFunction={props.carouselLeftArrowClick} />
      <div className="carousel-wrapper" ref={ref}>
        {props.photos.map((photo, index) => {
          return <CarouselImage key={index} photo={photo} />
        })}
      </div>
      <Arrow direction="right" glyph="&#10095;" clickFunction={props.carouselRightArrowClick}/>
    </div>
  )
})

export default Carousel;