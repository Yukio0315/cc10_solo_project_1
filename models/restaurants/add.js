module.exports = knex => {
  return params => {
    const name = params.name,
      category = params.category,
      url = params.url,
      address = params.address,
      tel = params.tel,
      opentime = params.opentime,
      budget = params.budget,
      lunch = params.lunch;

    if (
      !name.trim() ||
      !category.trim() ||
      !url.trim() ||
      !address.trim() ||
      !tel.trim() ||
      !opentime.trim()
    ) {
      return Promise.reject(new Error("Input the correct params"));
    }

    return knex("restaurants")
      .insert({
        name,
        category,
        url,
        address,
        tel,
        opentime,
        budget,
        lunch
      })
      .then(() => {
        return knex("restaurants")
          .where({ name: name })
          .select();
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };
};
