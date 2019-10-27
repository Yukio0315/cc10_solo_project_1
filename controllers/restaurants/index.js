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

  const addRestaurant = (req, res) => {
    return models.restaurants
      .add({
        id: req.params.id,
        name: req.body.name,
        category: req.body.category,
        url: req.body.url,
        address: req.body.address,
        tel: req.body.tel,
        opentime: req.body.opentime,
        budget: req.body.budget,
        lunch: req.body.lunch
      })
      .then(restaurants => res.status(200).json(restaurants))
      .catch(err => res.status(400).send(err.message));
  };

  const patchRestaurant = (req, res) => {
    return models.restaurants
      .patch({
        id: req.body.id,
        column: req.body.column,
        value: req.body.value
      })
      .then(restaurants => res.status(200).json(restaurants))
      .catch(err => res.status(400).send(err.message));
  };

  const softDeleteRestaurant = (req, res) => {
    return models.restaurants
      .softdelete({
        id: req.body.id
      })
      .then(restaurants => res.status(200).json(restaurants))
      .catch(err => res.status(400).send(err.message));
  };

  const deleteRestaurant = (req, res) => {
    return models.restaurants
      .delete({ id: req.body.id })
      .then(restaurants => res.status(200).json(restaurants))
      .catch(err => res.status(400).send(err.message));
  };

  const router = express.Router();
  router.get("/", listRestaurants);
  router.post("/add-all", addAllRestaurants);
  router.post("/add", addRestaurant);
  router.patch("/patch", patchRestaurant);
  router.delete("/delete", deleteRestaurant);
  router.put("/soft-delete", softDeleteRestaurant);

  return router;
};
