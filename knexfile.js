// Update with your config settings.
require ('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/targetdb'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + "?ssl=true"
  }
};
