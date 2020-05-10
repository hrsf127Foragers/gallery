import React from 'react';

const CarouselImage = (props) => {
  return (
    <div>
      <img className="carousel-image" id={props.id} src={props.photo} onClick={props.handleCarouselPictureClick}></img>
    </div>
  )
}

export default CarouselImage;