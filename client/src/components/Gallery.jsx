import React from 'react';
import Carousel from './Carousel.jsx';
import Modal from './Modal.jsx';

const testImages = ['https://loremflickr.com/320/240/foods?lock=1',
'https://loremflickr.com/320/240/foods?lock=2', 'https://loremflickr.com/320/240/foods?lock=3', 'https://loremflickr.com/320/240/foods?lock=4', 'https://loremflickr.com/320/240/foods?lock=5', 'https://loremflickr.com/320/240/foods?lock=6', 'https://loremflickr.com/320/240/foods?lock=7', 'https://loremflickr.com/320/240/foods?lock=8', 'https://loremflickr.com/320/240/foods?lock=9', 'https://loremflickr.com/320/240/foods?lock=10']

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.state = {
      photos: testImages,
      carouselXPosition: 0,
      showModal: false
    }
    this.carouselLeftArrowClick = this.carouselLeftArrowClick.bind(this);
    this.carouselRightArrowClick = this.carouselRightArrowClick.bind(this);
    this.handleCarouselPictureClick = this.handleCarouselPictureClick.bind(this);
    this.handleModalCloseButtonClick = this.handleModalCloseButtonClick.bind(this);
  }

  componentDidMount() {
  }

  carouselLeftArrowClick() {
    let carouselXPosition = this.state.carouselXPosition;
    if (carouselXPosition === 0) {
      return;
    } else {
      let updatedCarouselXPosition = carouselXPosition - 1200; // moves back 4 images
      this.setState({
        carouselXPosition: updatedCarouselXPosition
      }, () => {this.carouselRef.current.scroll({left: this.state.carouselXPosition, behavior: 'smooth'})});
    }
  }

  carouselRightArrowClick() {
    let carouselXPosition = this.state.carouselXPosition;
    let endOfPhotos = Math.floor(this.state.photos.length/4) * 1208;
    if (carouselXPosition === endOfPhotos) {
      return;
    } else {
      let updatedCarouselXPosition = carouselXPosition + 1208; // moves forward 4 images
      this.setState({
        carouselXPosition: updatedCarouselXPosition
      }, () => {this.carouselRef.current.scroll({left: this.state.carouselXPosition, behavior: 'smooth'})});
    }
  }

  handleCarouselPictureClick() {
    console.log('click');
    this.setState({
      showModal: true
    })
  }

  handleModalCloseButtonClick () {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div>
        <Carousel photos={this.state.photos} carouselLeftArrowClick={this.carouselLeftArrowClick} carouselRightArrowClick={this.carouselRightArrowClick} handleCarouselPictureClick={this.handleCarouselPictureClick} ref={this.carouselRef} />
        <Modal photos={this.state.photos} handleModalCloseButtonClick={this.handleModalCloseButtonClick} showModal={this.state.showModal} />
      </div>
    )
  }
}

export default Gallery;