// Import Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// Sets Up Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Set Up Static Files
app.use(express.static("public"));

// Sets Express For Data Parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
// Import and Activate Routes
var routes = require("./controllers/orders_controller.js");
app.use(routes);

// Start Server Listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
