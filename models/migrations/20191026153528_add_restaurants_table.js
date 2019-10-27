exports.up = function(knex) {
  return knex.schema.createTable("restaurants", t => {
    t.increments().index();

    t.string("name")
      .notNullable()
      .index();

    t.string("name_kana");

    t.string("url").notNullable();

    t.string("category");

    t.string("address");

    t.string("tel");

    t.string("opentime");

    t.string("budget");

    t.string("lunch");

    t.string("credit_card");

    t.boolean("deleted");

    t.timestamp("deleted_date");

    t.timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());

    t.timestamp("modified_at")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("restaurants");
};
