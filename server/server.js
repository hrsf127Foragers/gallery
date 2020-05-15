const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller.js');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port  = 3001;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.use(cors());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
//   next();
// });

app.use(morgan('tiny'));

app.get('/photos', controller.getAllPhotos);

app.get('/restaurants/:restaurant_id/photos', controller.getPhotosByRestaurantID);

let data = [
  {
      "id": 935,
      "title": "nom nom nom",
      "photo_date": "2016-06-18T07:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=0",
      "restaurant_id": 100,
      "user_id": 48
  },
  {
      "id": 936,
      "title": "bomb dot com",
      "photo_date": "2018-03-10T08:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=1",
      "restaurant_id": 100,
      "user_id": 88
  },
  {
      "id": 937,
      "title": "yummers",
      "photo_date": "2017-05-14T07:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=2",
      "restaurant_id": 100,
      "user_id": 94
  },
  {
      "id": 938,
      "title": "yummers",
      "photo_date": "2017-05-14T07:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=3",
      "restaurant_id": 100,
      "user_id": 32
  },
  {
      "id": 939,
      "title": "yummy",
      "photo_date": "2016-06-18T07:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=4",
      "restaurant_id": 100,
      "user_id": 78
  },
  {
      "id": 940,
      "title": "bomb dot com",
      "photo_date": "2018-03-10T08:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=5",
      "restaurant_id": 100,
      "user_id": 56
  },
  {
      "id": 941,
      "title": "to die for",
      "photo_date": "2019-01-01T08:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=6",
      "restaurant_id": 100,
      "user_id": 92
  },
  {
      "id": 942,
      "title": "nom nom nom",
      "photo_date": "2018-03-10T08:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=7",
      "restaurant_id": 100,
      "user_id": 91
  },
  {
      "id": 943,
      "title": "so bomb",
      "photo_date": "2015-10-22T07:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=9",
      "restaurant_id": 100,
      "user_id": 58
  },
  {
      "id": 944,
      "title": "delicous",
      "photo_date": "2017-05-14T07:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=10",
      "restaurant_id": 100,
      "user_id": 36
  },
  {
      "id": 945,
      "title": "delicous",
      "photo_date": "2019-01-01T08:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=11",
      "restaurant_id": 100,
      "user_id": 50
  },
  {
      "id": 946,
      "title": "scrumptous",
      "photo_date": "2019-01-01T08:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=12",
      "restaurant_id": 100,
      "user_id": 2
  },
  {
      "id": 947,
      "title": "bomb dot com",
      "photo_date": "2016-06-18T07:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=13",
      "restaurant_id": 100,
      "user_id": 55
  },
  {
      "id": 948,
      "title": "delicous",
      "photo_date": "2015-10-22T07:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=14",
      "restaurant_id": 100,
      "user_id": 68
  },
  {
      "id": 949,
      "title": "scrumptous",
      "photo_date": "2015-10-22T07:00:00.000Z",
      "photo_url": "https://loremflickr.com/320/240/fruits?lock=15",
      "restaurant_id": 100,
      "user_id": 42
  }
]

// app.get('/restaurants/100/photos', (req, res) => {
//   res.send(data);
// })

app.get('/restaurants/:restaurant_id', controller.getRestaurantNameByID);

// app.get('/restaurants/100', (req, res) => {
//   res.send([
//     {
//         "id": 100,
//         "restaurant_name": "Jake Dumplings Parlor"
//     }
//   ])
// });

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});