
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'mysql',
    user     : 'awesomeness',
    password : 'lamepassword',
    database : 'mybooks',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

export default bookshelf;
