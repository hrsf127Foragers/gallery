import React from 'react';

const CarouselImage = (props) => {
  return (
    <div>
      <img className="image" src={props.photo}></img>
    </div>
  )
}

export default CarouselImage;