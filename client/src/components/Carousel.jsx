import React from 'react';
import CarouselImage from './CarouselImage.jsx';
import Arrow from './Arrow.jsx';

const Carousel = (props) => {
  return(
    <div className="carousel">
      <Arrow direction="left" glyph="&#9664;" clickFunction={props.carouselLeftArrowClick} />
        <CarouselImage imageUrl={props.imageUrl}/>
      <Arrow direction="right" glyph="&#9654;" clickFunction={props.carouselRightArrowClick}/>
    </div>
  )
}

export default Carousel;