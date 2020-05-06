import React from 'react';
import Carousel from './Carousel.jsx';
import {mount, shallow} from 'enzyme';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: 'https://loremflickr.com/320/240/foods'
    }
    this.carouselLeftArrowClick = this.carouselLeftArrowClick.bind(this);
    this.carouselRightArrowClick = this.carouselRightArrowClick.bind(this);
  }

  carouselLeftArrowClick() {
    console.log('left');
  }

  carouselRightArrowClick() {
    console.log('right');
  }

  render() {
    return (
      <div>
        <Carousel imageUrl={this.state.imageUrl} carouselLeftArrowClick={this.carouselLeftArrowClick} carouselRightArrowClick={this.carouselRightArrowClick}/>
      </div>
    )
  }
}

export default Gallery;