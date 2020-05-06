const db = require('../database.js');

const getAllPhotos = (callback) => {
  let queryString = 'SELECT * FROM photos';
  db.query(queryString, (err, data) => {
    if (err) {
      console.log('error from getAllPhotos model: ', err);
    } else {
      callback(null, data);
    }
  })
}

const getPhotosByRestaurantID = (params, callback) => {
  // console.log('Params: ', params);
  let queryString = `SELECT * FROM photos WHERE restaurant_id=${params.restaurant_id}`;
  db.query(queryString, (err, data) => {
    if (err) {
      console.log('error from getPhotosByRestaurantID model: ', err);
    } else {
      callback(null, data);
    }
  })
}

module.exports = {
  getAllPhotos,
  getPhotosByRestaurantID
}