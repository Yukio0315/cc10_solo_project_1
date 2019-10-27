const axios = require("axios");

const endPoint =
  "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=44d836440e0d4ee946d125292730a20c&&latitude=35.658062&longitude=139.7275625&range=5";

const restaurants = axios
  .get(endPoint)
  .then(response => {
    return response.data.rest.map(restaurant => {
      return {
        name: restaurant.name,
        name_kana: restaurant.name_kana,
        category: restaurant.category,
        url: restaurant.url,
        address: restaurant.address,
        tel: restaurant.tel,
        opentime: restaurant.opentime,
        budget: restaurant.budget,
        lunch: restaurant.lunch,
        credit_card: restaurant.credit_card
      };
    });
  })
  .catch(err => new Error(`Error ${err}`));

module.exports = knex => {
  return () => {
    if (restaurants)
      return restaurants.then(res => {
        return knex("restaurants")
          .insert(res)
          .catch(err => new Error(`Error ${err}`));
      });
    return { statuscode: 303 };
  };
};
