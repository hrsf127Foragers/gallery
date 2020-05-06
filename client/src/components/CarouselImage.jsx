import React from 'react';

const CarouselImage = (props) => {
  console.log(props);
  return (
    <div className="image-container">
      <img className="image-slide" src={props.mainPhoto}></img>
    </div>
  )
}

export default CarouselImage;