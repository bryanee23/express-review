var restaurants = require('../restaurants.json');

const controllers = {
  //endpoint
  getAll: (req, res) => {
    res
      .status(200)
      .send(restaurants)
      .end();
  },
  getOne: (req, res) => {
    let restaurant = restaurants[req.params.id];
    if (restaurant) {
      res
        .status(200)
        .send(restaurant)
        .end();
    } else {
      res
        .status(404)
        .send(`${req.params.id} was not found`)
        .end();
      //never leave a client haning during the TA
    }
  },
  postOne: (req, res) => {
    let name = req.body.name;
    let rating = req.body.rating;
    if (name !== undefined && rating !== undefined) {
      restaurants.push({
        restaurant_name: name,
        rating: rating,
      });
      res
        .status(201)
        .send(`Added ${name} to database with a ${rating} rating`)
        .end();
    } else {
      res
        .status(404)
        .send(`Invalid format`)
        .end();
    }
  },
  deleteOne: (req, res) => {
    let restaurant = restaurants[req.params.id];
    if (!!restaurant) {
      restaurants.splice(req.params.id, 1);
      res
        .status(200)
        .send(`Removed restaurant at index ${req.params.id}`)
        .end();
    } else {
      res
        .status(404)
        .send(`No restaurant at index ${req.params.id}`)
        .end();
    }
  },
};

module.exports = controllers;
