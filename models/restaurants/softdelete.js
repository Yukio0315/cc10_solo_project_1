module.exports = knex => {
  return params => {
    const id = params.id;
    const deletedDate = new Date();

    return knex("restaurants")
      .where({ id: id })
      .update({
        deleted: true,
        deleted_date: deletedDate,
        modified_at: deletedDate
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
