module.exports = knex => {
  return () => {
    return knex("restaurants")
      .select()
      .catch(err => new Error(`Error ${err}`));
  };
};
