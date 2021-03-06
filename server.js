//Dependencies
//===============================================
var express = require('express');
var bodyParser = require('body-parser');

//Setting up Express
//================================================
var app = express();
var PORT = process.env.PORT || 8080;

//Serve static content from public directory
//===================================================
app.use(express.static("public/"));


//Setting up the Express App to handle data parsing
//==================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});