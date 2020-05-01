DROP DATABASE IF EXISTS photos;
CREATE DATABASE photos;

USE photos;

CREATE TABLE restaurants (
  id INT NOT NULL AUTO_INCREMENT,
  restaurant_name VARCHAR(30) NOT NULL,
  addresss VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  restaurant_state VARCHAR(50) NOT NULL,
  phone INT NOT NULL,
  cuisine VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  photo_date DATE NOT NULL,
  photo_url TEXT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(restaurant_id) REFERENCES restaurants(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
)

CREATE TABLE users (
  id INTO NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(30),
  user_profile_url VARCHAR(250) NOT NULL,
  user_friends INT NOT NULL,
  user_reviews INT NOT NULL
)