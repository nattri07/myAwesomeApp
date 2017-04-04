// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'mybooks', // make sure you have this db created in your mysql server
      user: 'root', // can be explicitly specified to be something else
      password: '', // your corresponding password
      host: 'localhost',
      port: '3306' // Default port unless you've configured your sql server otherwise
    }
  }

};
