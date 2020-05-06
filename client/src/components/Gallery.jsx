import React from 'react';
import Carousel from './Carousel.jsx';

const testImages = ['https://loremflickr.com/320/240/foods?random=1',
'https://loremflickr.com/320/240/foods?random=2', 'https://loremflickr.com/320/240/foods?random=3', 'https://loremflickr.com/320/240/foods?random=4', 'https://loremflickr.com/320/240/foods=5', 'https://loremflickr.com/320/240/foods?random=6', 'https://loremflickr.com/320/240/foods?random=7', 'https://loremflickr.com/320/240/foods?random=8', 'https://loremflickr.com/320/240/foods?random=9', 'https://loremflickr.com/320/240/foods?random=10']

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: testImages,
      mainPhoto: testImages[0],
      mainPhotoIndex: 0,
      carouselBeginIndex: 0, // use later for array of photos
      carouselEndIndex: 3
    }
    this.carouselLeftArrowClick = this.carouselLeftArrowClick.bind(this);
    this.carouselRightArrowClick = this.carouselRightArrowClick.bind(this);
  }

  carouselLeftArrowClick() {
    // console.log('left');
    let mainPhotoIndex = this.state.mainPhotoIndex;
    let firstPhoto = mainPhotoIndex === 0;
    let index = firstPhoto ? 0 : mainPhotoIndex - 1;
    this.setState({
      mainPhotoIndex: index
    }, () => {
      this.setState({
        mainPhoto: testImages[this.state.mainPhotoIndex]
      })
    })
  }

  carouselRightArrowClick() {
    // console.log('right');
    let lastIndex = this.state.photos.length - 1;
    let mainPhotoIndex = this.state.mainPhotoIndex;
    let lastPhoto = mainPhotoIndex === lastIndex;
    let index = lastPhoto ? lastIndex : mainPhotoIndex + 1;
    this.setState({
      mainPhotoIndex: index
    }, () => {
      this.setState({
        mainPhoto: testImages[this.state.mainPhotoIndex]
      })
    })
  }

  render() {
    return (
      <div className="carousel">
        <Carousel photos={this.state.photos} mainPhoto={this.state.mainPhoto} carouselLeftArrowClick={this.carouselLeftArrowClick} carouselRightArrowClick={this.carouselRightArrowClick}/>
      </div>
    )
  }
}

export default Gallery;