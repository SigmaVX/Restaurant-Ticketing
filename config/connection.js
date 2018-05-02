// Set MySQL DB Connection Information 
// =============================================================
require('dotenv').config();
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.SQL_KEY,
    database: process.env.SQL_DB
  });

// Initiate MySQL Connection
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// Export Connection for ORM.
module.exports = connection;
