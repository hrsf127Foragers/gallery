-- To create database and tables, run mysql -u root -p < schema.sql
-- For testing purposes drop DATABASE before reloading it
DROP DATABASE IF EXISTS gallery;
CREATE DATABASE gallery;

USE gallery;

CREATE TABLE restaurants (
  id INT NOT NULL AUTO_INCREMENT,
  restaurant_name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(30),
  user_profile_url TEXT NOT NULL,
  user_friends INT NOT NULL,
  user_reviews INT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  photo_date DATE NOT NULL,
  photo_url TEXT NOT NULL,
  restaurant_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(restaurant_id) REFERENCES restaurants(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

-- INSERT INTO restaurants (restaurant_name) VALUES ('Joe\'s Crab Shack');
-- INSERT INTO users (user_name, user_profile_url, user_friends, user_reviews) VALUES ('Johnny', 'www.yelp.com/users/1', '8', '68');
-- INSERT INTO photos (title, photo_date, photo_url, restaurant_id, user_id) VALUES ('bomb dot com','2019-01-14', 'https://loremflickr.com/320/240/foods', '1', '1');
