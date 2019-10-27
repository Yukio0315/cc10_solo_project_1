const express = require("express");

module.exports = models => {
  const listRestaurants = (req, res) => {
    return models.restaurants
      .list()
      .then(restaurants => res.status(200).json(restaurants))
      .catch(err => res.status(400).send(err.message));
  };

  const addAllRestaurants = (req, res) => {
    return models.restaurants
      .create()
      .then(restaurants => res.status(200).json(restaurants))
      .catch(err => res.status(400).send(err.message));
  };

  const router = express.Router();
  router.get("/", listRestaurants);
  router.get("/add", addAllRestaurants);

  return router;
};
