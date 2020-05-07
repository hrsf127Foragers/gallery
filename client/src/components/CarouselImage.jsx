import React from 'react';

const CarouselImage = (props) => {
  return (
    <div className="image-container">
      <img className="image-slide" src={props.photo}></img>
    </div>
  )
}

export default CarouselImage;