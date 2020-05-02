const connection = require('database.js');

const randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min); // 0 <= Math.random() < 1
}

const populateRestaurants = () => {
  let names = ['Joe', 'Mike', 'Trevor', 'Servio', 'Charlie', 'Lou', 'Jake', 'Jack', 'Tom', 'Jill', 'Sandy', 'Beth', 'Bob', 'Lindsay', 'Mary', 'Carlos', 'Nick', 'Ben', 'Jerry', 'Scooby', 'Scrappy'];

  let foodTypes = ['Mexican', 'Tacos', 'Burritos', 'Pizza', 'Italian', 'American', 'Burgers', 'Seafood', 'Crab', 'Lobster', 'Dumplings', 'Fried Chicken', 'Chinese', 'Sandwiches', 'Sushi', 'Pancakes', 'Waffles', 'Beer'];

  let storeTypes = ['Bistro', 'Stand', 'Shack', 'Restaurant', 'House', 'Parlor', 'Bar', 'Truck', 'Place', 'Kitchen', 'Corner', 'Spot'];

  for (let i = 0; i < 100; i++) {
    let randomName = names[randomNumberGenerator(0, names.length)];
    let randomFoodType = foodTypes[randomNumberGenerator(0, foodTypes.length)];
    let randomStoreType = storeTypes[randomNumberGenerator(0, storeTypes.length)];
    let restaurantName = `${randomName}'s ${randomFoodType} ${randomStoreType}`;

    let queryString = `INSERT INTO restaurants (restaurant_name) VALUES ('${restaurantName}')`;
    connection.query(queryString, (err, data) => {
      if(err) {
        console.log('error in populating the restaurants table: ', err);
      } else {
        console.log('success in populating the restaurants table: ', data);
      }
    });
  }
}

const populateUsers = () => {
  for (let i = 0; i <= 100; i++) {
    let userNames = ['Neon', 'Omega', 'Kookaburra', 'RagingBull', 'Asylum', 'Flurry', 'Ollie', 'Scoobie', 'Brave', 'Guaymas', 'Pinochio', 'Danana', 'Pepita', 'Padila', 'Ninja', 'Bonza'];
    let randomIndex = randomNumberGenerator(0, userNames.length);
    let userName = userNames[randomIndex];
    let userUrl = `https://yelp.com/users/${i}`;
    let userFriends = randomNumberGenerator(0, 1000);
    let userReviews = randomNumberGenerator(0, 1000);

    let queryString = `INSERT INTO users (user_name, user_profile_url, user_friends, user_reviews) VALUES ('${userName}', '${userURL}, '${userFriends}', '${userReviews}')`;
    connection.query(queryString, (err, data) => {
      if(err) {
        console.log('error in populating the users table: ', err);
      } else {
        console.log('success in populating the users table: ', data);
      }
    });
  }
};

const populateRestaurantPhotos = () => {
  let photoDescriptions = ['delicous', 'bomb dot com', 'so bomb', 'it\'s lit', 'yummy', 'scrumptous', 'yummers', 'noms', 'nom nom nom', 'to die for'];
  let years = ['2019','2018', '2017', '2016', '2015'];
  let months = ['01', '03', '05', '06', '10'];
  let days = ['1', '10', '14', '18', '22'];

  for (let i = 0; i < 100; i++) {
    let randomNum = randomNumberGenerator(0, 20);
    for (let j = 0; j < randomNum.length; j++) {
      let randomIndex = randomNumberGenerator(0, photoDescriptions.length);
      let description = photoDescriptions[randomIndex];
      let dateIndex = randomNumberGenerator(0, 5); // up to 4
      let date = `${years[dateIndex]}-${months[dateIndex]}-${days[dateIndex]}`;
      let photoUrl = `https://loremflickr.com/320/240/foods`;
      let randomUserId = randomNumberGenerator(0, 100);

      let queryString = `INSERT INTO photos (title, photo_date, photo_url, restaurant_id, user_id) VALUES ('${description}','${date}', '${photoUrl}', '${i}', '${randomUserId}')`;
      connection.query(queryString, (err, data) => {
        if(err) {
          console.log('error in populating the photos table: ', err);
        } else {
          console.log('success in populating the photos table: ', data);
        }
      });
    }
  }
}


populateRestaurants();
populateUsers();
populateRestaurantPhotos();