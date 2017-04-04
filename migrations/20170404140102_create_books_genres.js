
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books_genres', function(table) {
    table.increments('id').unsigned().primary();
    table.integer('book_id').unsigned().references('books.id');
    table.integer('genre_id').unsigned().references('genres.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books_genres');
};
