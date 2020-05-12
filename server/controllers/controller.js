const model = require('../../database/models/models.js');

const getAllPhotos = (req, res) => {
  model.getAllPhotos((err, result) => {
    if (err) {
      console.log('error from getAllPhotos server: ', err);
      res.status(500);
    } else {
      res.json(result);
    }
  })
}

const getPhotosByRestaurantID = (req, res) => {
  // console.log("req.params: ", req.params);
  model.getPhotosByRestaurantID(req.params, (err, result) => {
    if (err) {
      console.log('error from getPhotosByRestaurantID server: ', err);
      res.status(500);
    } else {
      res.status(200).json(result);
    }
  })
}

const getRestaurantNameByID = (req, res) => {
  model.getRestaurantNameByID(req.params, (err, result) => {
    if (err) {
      console.log('error from getRestaurantNameByID server: ', err);
      res.status(500);
    } else {
      res.status(200).json(result);
    }
  })
}

module.exports = {
  getAllPhotos,
  getPhotosByRestaurantID,
  getRestaurantNameByID
}