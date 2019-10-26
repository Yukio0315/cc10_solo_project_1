exports.up = function(knex, Promise) {
  return knex.schema.createTable("restaurants", t => {
    t.increments().index();

    t.string("name")
      .unique()
      .notNullable()
      .index();

    t.string("name_kana")
      .unique()
      .notNullable()
      .index();

    t.string("url")
      .unique()
      .notNullable()
      .index();

    t.timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("channels");
};
