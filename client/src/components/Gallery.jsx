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
      showModal: false,
      photoId: null,
      modalPhoto: null
    }
    this.carouselLeftArrowClick = this.carouselLeftArrowClick.bind(this);
    this.carouselRightArrowClick = this.carouselRightArrowClick.bind(this);
    this.handleCarouselPictureClick = this.handleCarouselPictureClick.bind(this);
    this.handleModalCloseButtonClick = this.handleModalCloseButtonClick.bind(this);
    this.handleModalLeftArrowClick = this.handleModalLeftArrowClick.bind(this);
    this.handleModalRightArrowClick = this.handleModalRightArrowClick.bind(this);
  }

  carouselLeftArrowClick() {
    let carouselXPosition = this.state.carouselXPosition;
    if (carouselXPosition === 0) {
      return;
    } else {
      let updatedCarouselXPosition = carouselXPosition - 1208; // moves back 4 images
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

  handleCarouselPictureClick(e) {
    let clickedPhotoId = Number(e.target.id);
    this.setState({
      showModal: true,
      photoId: clickedPhotoId
    }, () => {
      let photoToDisplay = this.state.photos[this.state.photoId];
      this.setState({
        modalPhoto: photoToDisplay
      })
    })
  }

  handleModalCloseButtonClick() {
    this.setState({
      showModal: false
    })
  }

  handleModalLeftArrowClick() {
    let photoId = this.state.photoId;
    if(photoId > 0) {
      this.setState({
        photoId: photoId - 1
      }, () => {
        let photoToDisplay = this.state.photos[this.state.photoId];
        this.setState({
          modalPhoto: photoToDisplay
        })
      })
    }
  }

  handleModalRightArrowClick() {
    let photoId = this.state.photoId;
    if(photoId < this.state.photos.length - 1) {
      this.setState({
        photoId: this.state.photoId + 1
      }, () => {
        let photoToDisplay = this.state.photos[this.state.photoId];
        this.setState({
          modalPhoto: this.state.photos[this.state.photoId]
        })
      })
    }
  }

  render() {
    return (
      <div>
        <Carousel photos={this.state.photos} carouselLeftArrowClick={this.carouselLeftArrowClick} carouselRightArrowClick={this.carouselRightArrowClick} handleCarouselPictureClick={this.handleCarouselPictureClick} ref={this.carouselRef} />
        <Modal photos={this.state.photos} handleModalCloseButtonClick={this.handleModalCloseButtonClick} showModal={this.state.showModal} modalPhoto={this.state.modalPhoto} photoId={this.state.photoId} handleModalLeftArrowClick={this.handleModalLeftArrowClick} handleModalRightArrowClick={this.handleModalRightArrowClick}/>
      </div>
    )
  }
}

export default Gallery;