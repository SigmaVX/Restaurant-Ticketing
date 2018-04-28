// Import Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");
var dotenv = require("dotenv");
var mysql = require("mysql");


// Set MySQL DB Connection Information 
// =============================================================
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


// Sets Up Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Set Up Static Files
app.use(express.static("app/public"));

// Sets Express For Data Parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
// require("./app/routes/apiRoutes")(app);
// require("./app/routes/htmlRoutes")(app);

app.get("/", function(req, res){
  var querySQL = "SELECT * FROM orders";
  connection.query(querySQL, function(err, res) {
    if (err){
      throw err; 
    }
    var data = res;
    res.render("index", data );
    });
});


// Start Server Listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
