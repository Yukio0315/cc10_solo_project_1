const config = require("../config");
const knex = require("knex")(config.db);

const ignoreError = () => {};

const clearTable = tableName => {
  knex(tableName)
    .del()
    .catch(ignoreError);
};

const tables = ["restaurants"];

Promise.all(tables.map(clearTable)).then(process.exit);
