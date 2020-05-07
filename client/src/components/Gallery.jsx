import React from 'react';
import Carousel from './Carousel.jsx';

const testImages = ['https://loremflickr.com/320/240/foods?random=1',
'https://loremflickr.com/320/240/foods?random=2', 'https://loremflickr.com/320/240/foods?random=3', 'https://loremflickr.com/320/240/foods?random=4', 'https://loremflickr.com/320/240/foods=5', 'https://loremflickr.com/320/240/foods?random=6', 'https://loremflickr.com/320/240/foods?random=7', 'https://loremflickr.com/320/240/foods?random=8', 'https://loremflickr.com/320/240/foods?random=9', 'https://loremflickr.com/320/240/foods?random=10']

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: testImages,
      photosArray: [],
      carouselPhotos: [testImages[0], testImages[1], testImages[2], testImages[3]],
      carouselIndex: 0
    }
    this.carouselLeftArrowClick = this.carouselLeftArrowClick.bind(this);
    this.carouselRightArrowClick = this.carouselRightArrowClick.bind(this);
  }

  componentDidMount(){
    this.updatePhotosArray();
  }

  updatePhotosArray() {
    let tempArr = [];
    let copyOfArr = [];
    let allPhotos = this.state.photos;
    if (allPhotos.length > 25) {
      copyOfArr = allPhotos.slice(0,25); // make a copy of first 25 photos
    } else {
      copyOfArr = [...this.state.photos];
    }
    while (copyOfArr.length > 0) {
      let photoArr = copyOfArr.splice(0,4);
      if (photoArr.length < 4) {  // want to show last 4 photos
        let diffNum = 4 - photoArr.length;
        for (let i = 0; i < diffNum; i++) {
          let index = (allPhotos.indexOf(photoArr[0])) - 1;
          photoArr.unshift(allPhotos[index]);
        };
      }
      tempArr.push(photoArr);
    }
    this.setState({
      photosArray: tempArr
    }, () => {console.log(this.state.photosArray)});
  }

  carouselLeftArrowClick() {
    let carouselIndex = this.state.carouselIndex;
    let copyOfPhotosArray = [...this.state.photosArray];
    let firstArrayOfPhotos = carouselIndex === 0;
    let index = firstArrayOfPhotos ? 0 : carouselIndex - 1;
    this.setState({
      carouselIndex: index
    }, () => {
      this.setState({
        carouselPhotos: copyOfPhotosArray[this.state.carouselIndex]
      })
    })
  }

  carouselRightArrowClick() {
    let lastIndex = this.state.photosArray.length - 1;
    let carouselIndex = this.state.carouselIndex;
    let copyOfPhotosArray = [...this.state.photosArray];
    let lastArrayOfPhotos = carouselIndex === lastIndex;
    let index = lastArrayOfPhotos ? lastIndex : carouselIndex + 1;
    this.setState({
      carouselIndex: index
    }, () => {
      this.setState({
        carouselPhotos: copyOfPhotosArray[this.state.carouselIndex]
      })
    })
  }

  render() {
    return (
      <div className="carousel">
        <Carousel photos={this.state.photos} carouselPhotos={this.state.carouselPhotos} carouselLeftArrowClick={this.carouselLeftArrowClick} carouselRightArrowClick={this.carouselRightArrowClick}/>
      </div>
    )
  }
}

export default Gallery;