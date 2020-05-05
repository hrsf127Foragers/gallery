import React from 'react';

const CarouselImage = (props) => {
  return (
    <div>
        <img className="image-slide" src={props.imageUrl}></img>
    </div>
  )
}

export default CarouselImage;