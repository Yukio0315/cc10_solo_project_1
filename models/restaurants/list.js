module.exports = knex => {
  return () => {
    return knex("restaurants")
      .where("deleted", null)
      .orWhere("deleted", false)
      .select()
      .catch(err => new Error(`Error ${err}`));
  };
};
