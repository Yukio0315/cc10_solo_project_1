module.exports = knex => {
  return {
    restaurants: require("./restaurants")(knex)
  };
};
