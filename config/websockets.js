module.exports = function(http) {
    var io = require("socket.io")(http);

    return function(request, response, next) {
        io.on("connection", function(socket) {
            socket.on("sample", function(data) {
                console.log(data);
                io.emit("sample", data);
            });
        });
        next();
    }
}