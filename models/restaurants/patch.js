module.exports = knex => {
  return params => {
    console.log(params);
    const id = params.id;
    const column = params.column;
    const value = params.value;

    return knex("restaurants")
      .where({ id: id })
      .update({
        [column]: value
      })
      .then(() => {
        return knex("restaurants")
          .where({ id: id })
          .select();
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };
};
