module.exports = knex => {
  return {
    create: require("./create")(knex),
    list: require("./list")(knex),
    add: require("./add")(knex),
    patch: require("./patch")(knex),
    softdelete: require("./softdelete")(knex),
    delete: require("./delete")(knex)
  };
};
