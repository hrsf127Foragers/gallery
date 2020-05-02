const db = require('../database.js');

function getAllPhotos(callback) {
  let queryString = 'SELECT * FROM photos';
  db.query(queryString, function(err, data) {
    if (err) {
      console.log('error from getAllPhotos model: ', err);
    } else {
      callback(null, data);
    }
  })
}

module.exports = {
  getAllPhotos
}