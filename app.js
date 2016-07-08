var app = require("./config/express");
var routes = require("./app/routes")(app);

app.get("HTTP").listen(app.get("PORT"), function() {
    console.log("listening on " + app.get("PORT"));
});