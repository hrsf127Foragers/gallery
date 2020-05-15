import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Modal from './Modal.jsx';
import data from '../mockData.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.sliderRef = React.createRef();
    this.state = {
      data: [],
      photos: [],
      carouselXPosition: 0,
      showModal: false,
      photoId: null,
      modalPhoto: null,
      sliderYPosition: 0,
      restaurantName: ''
    }
    this.carouselLeftArrowClick = this.carouselLeftArrowClick.bind(this);
    this.carouselRightArrowClick = this.carouselRightArrowClick.bind(this);
    this.handleCarouselPictureClick = this.handleCarouselPictureClick.bind(this);
    this.handleModalCloseButtonClick = this.handleModalCloseButtonClick.bind(this);
    this.handleModalLeftArrowClick = this.handleModalLeftArrowClick.bind(this);
    this.handleModalRightArrowClick = this.handleModalRightArrowClick.bind(this);
    this.handleSliderClick = this.handleSliderClick.bind(this);
  }

  componentDidMount() {
    axios
    .get(`/restaurants/100/photos`)
    .then((response) => {
        // console.log(response.data);
      this.setState({data: response.data})
    })
    .then((response) => {
      let photosArray = [];
      this.state.data.forEach((item) => {
        photosArray.push(item.photo_url);
      })
      this.setState({photos: photosArray});
      return axios.get(`/restaurants/100`);
    })
    .then((response) => {
      // console.log(response.data);
      this.setState({restaurantName: response.data[0].restaurant_name})
    }).catch((err) => console.log(err));
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
    let updatedSliderYPosition = clickedPhotoId * 125;
    this.setState({
      showModal: true,
      photoId: clickedPhotoId,
      sliderYPosition: updatedSliderYPosition
    }, () => {
      let photoToDisplay = this.state.photos[this.state.photoId];
      this.setState({
        modalPhoto: photoToDisplay
      }, () => {
        this.sliderRef.current.scroll({top: this.state.sliderYPosition});
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
    let updatedSliderYPosition = this.state.sliderYPosition - 200;
    if(photoId > 0) {
      this.setState({
        photoId: photoId - 1,
        sliderYPosition: updatedSliderYPosition
      }, () => {
        let photoToDisplay = this.state.photos[this.state.photoId];
        this.setState({
          modalPhoto: photoToDisplay
        }, () => {
          this.sliderRef.current.scroll({top: this.state.sliderYPosition});
        })
      })
    }
  }

  handleModalRightArrowClick() {
    let photoId = this.state.photoId;
    let updatedSliderYPosition = this.state.sliderYPosition + 200;
    if(photoId < this.state.photos.length - 1) {
      this.setState({
        photoId: this.state.photoId + 1,
        sliderYPosition: updatedSliderYPosition
      }, () => {
        let photoToDisplay = this.state.photos[this.state.photoId];
        this.setState({
          modalPhoto: photoToDisplay
        }, () => {
          this.sliderRef.current.scroll({top: this.state.sliderYPosition})
        })
      })
    }
  }

  handleSliderClick(e) {
    let clickedPhotoId = Number(e.target.id);
    this.setState({
      photoId: clickedPhotoId
    }, () => {
      let photoToDisplay = this.state.photos[this.state.photoId];
      this.setState({
        modalPhoto: photoToDisplay
      })
    })
  }

  render() {
    return (
      <div>
        <Carousel photos={this.state.photos} carouselLeftArrowClick={this.carouselLeftArrowClick} carouselRightArrowClick={this.carouselRightArrowClick} handleCarouselPictureClick={this.handleCarouselPictureClick} ref={this.carouselRef} />
        <Modal photos={this.state.photos} restaurantName={this.state.restaurantName} handleModalCloseButtonClick={this.handleModalCloseButtonClick} showModal={this.state.showModal} modalPhoto={this.state.modalPhoto} photoId={this.state.photoId} handleModalLeftArrowClick={this.handleModalLeftArrowClick} handleModalRightArrowClick={this.handleModalRightArrowClick} handleSliderClick={this.handleSliderClick} ref={this.sliderRef}/>
      </div>
    )
  }
}

export default Gallery;