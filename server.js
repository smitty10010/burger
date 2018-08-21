//Dependencies
//===============================================
var express = require('express');
var bodyParser = require('body-parser');

//Setting up Express
//================================================
var app = express();
var PORT = process.env.PORT || 3000;

//Setting up the Express App to handle data parsing
//==================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});