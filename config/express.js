var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

//Setting constants
app.set("view engine", "jade");
app.set("views", "resources/views");
app.set("PORT", process.env.PORT || 3000);
app.set("HTTP", http);

//Setting middlewares
app.use(express.static('resources/assets'));

io.on("connection", function(socket) {
    socket.on("sample", function(data) {
        io.emit("sample", data);
    });
});

//Exports the configured express instance
module.exports = app;
