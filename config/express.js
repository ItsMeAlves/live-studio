var express = require("express");
var app = express();

//Setting constants
app.set("view engine", "jade");
app.set("views", "resources/views");
app.set("PORT", process.env.PORT || 3000);

//Setting middlewares
app.use(express.static('resources/assets'));

//Exports the configured express instance
module.exports = app;
