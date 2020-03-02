var restaurants = require('../restaurants.json');

const controllers = {
  getAll: (req, res) => {
    res
      .status(200)
      .send(restaurants)
      .end();
  },
};

module.exports = controllers;
