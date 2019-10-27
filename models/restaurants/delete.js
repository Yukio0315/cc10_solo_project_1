module.exports = knex => {
  return params => {
    const id = params.id;

    return knex("restaurants")
      .where({ id: id })
      .del()
      .catch(err => {
        return Promise.reject(err);
      });
  };
};
