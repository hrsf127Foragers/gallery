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

module.exports = {
  getAllPhotos
}