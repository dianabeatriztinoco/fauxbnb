const config = require('./index');

const db = config.db;

const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

// allows me to load the database configurations evnviroment variables from the .env file into tthe config/index.js 

// production and development have difference keys becayuse when i deploy my application to production my database wil read from teh URL path insted of the username, password and datatbase combo. 