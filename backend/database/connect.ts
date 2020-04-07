const mongoose = require('mongoose');
const config = require('./config');

class Database {
  constructor() {
    mongoose.connect(config.dbUrl, { useNewUrlParser: true })
  }

  connect = () => {
    const dbConnection = mongoose.connection;
    dbConnection.on('error', err => console.log(`Connection error ${err}`));
    dbConnection.once('open', () => console.log('Connected to DB'));
  }
}

module.exports = Database;