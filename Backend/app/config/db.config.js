
const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, `../../.env`),
});

module.exports = {
  url: `mongodb+srv://${process.env.DB_CONNECTION_USERNAME}:${process.env.DB_CONNECTION_PASSWORD}@cluster0.l3lbd2p.mongodb.net/?retryWrites=true&w=majority`,
  // url: "mongodb://127.0.0.1/my_database",
};
