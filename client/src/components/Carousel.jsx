import React from 'react';
import CarouselImage from './CarouselImage.jsx';
import Arrow from './Arrow.jsx';

const Carousel = (props) => {
  // console.log(props.mainPhotos);
  return(
    <div className="carousel">
      <Arrow direction="left" glyph="&#9664;" clickFunction={props.carouselLeftArrowClick} />
        {props.carouselPhotos.map((photo, index) => {
          return <CarouselImage key={index} photo={photo} />
        })}
        {/* <CarouselImage mainPhoto={props.mainPhoto} /> */}
      <Arrow direction="right" glyph="&#9654;" clickFunction={props.carouselRightArrowClick}/>
    </div>
  )
}

export default Carousel;