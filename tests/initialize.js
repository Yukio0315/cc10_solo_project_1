const config = require("../config");
const knex = require("knex")(config.db);

const ignoreError = () => {};

const clearTable = tableName => {
  knex(tableName)
    .del()
    .catch(ignoreError);
};

//TODO: write table name
const tables = [];

Promise.all(tables.map(clearTable)).then(process.exit);
