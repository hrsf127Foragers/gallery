const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller.js');
const app = express();
const port  = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/photos', controller.getAllPhotos);

app.get('/restaurants/:restaurant_id/photos', controller.getPhotosByRestaurantID);

app.get('/restaurants/:restaurant_id', controller.getRestaurantNameByID);

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});