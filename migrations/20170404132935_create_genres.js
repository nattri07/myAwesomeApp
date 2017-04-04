
exports.up = function(knex, Promise) {
  return knex.schema.createTable('genres', (table) => {
    table.increments('id').unsigned().primary();
    table.string('name').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('genres');
};
