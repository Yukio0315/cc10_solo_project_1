module.exports = () => {
  return models => {
    createRestaurants: request => {
      console.log(models);
      console.log(request);
      return models.create();
    };
  };
};
