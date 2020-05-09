import React from 'react';

const CarouselImage = (props) => {
  // console.log(props.handleCarouselPictureClick);
  return (
    <div>
      <img className="image" src={props.photo} onClick={props.handleCarouselPictureClick}></img>
    </div>
  )
}

export default CarouselImage;