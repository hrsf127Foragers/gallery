import React from 'react';

const CarouselImage = (props) => {
  return (
        <img className="image-slide" src={props.imageUrl}></img>
  )
}

export default CarouselImage;