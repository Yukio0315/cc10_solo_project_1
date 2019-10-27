const axios = require("axios");

const endPoint =
  "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=44d836440e0d4ee946d125292730a20c&&latitude=35.658062&longitude=139.7275625&range=5";

const restaurants = axios
  .get(endPoint)
  .then(response => {
    return response.data.rest.map(restaurant => {
      return [
        restaurant.name,
        restaurant.name_kana,
        restaurant.category,
        restaurant.url,
        restaurant.address,
        restaurant.tel,
        restaurant.opentime,
        restaurant.budget,
        restaurant.lunch,
        restaurant.credit_card
      ];
    });
  })
  .catch(error => {
    console.error("network error", error);
  });

module.exports = knex => {
  return () => {
    console.log("a");
    return knex("restaurants")
      .insert(restaurants)
      .catch(err => new Error(`Error ${err}`));
  };
};
