const express = require("express");

module.exports = models => {
  const listRestaurant = (req, res) => {
    return (
      models.restaurants
        .list()
        //   .then(restaurants => {
        //     restaurants.map(restaurant => restaurant);
        //   })
        .then(restaurants => res.status(200).json(restaurants))
        .catch(err => res.status(400).send(err.message))
    );
  };

  const router = express.Router();
  router.get("/", listRestaurant);

  return router;
};
