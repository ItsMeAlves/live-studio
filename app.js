var app = require("./config/express");
var routes = require("./config/routes")(app);

app.listen(app.get("PORT"), function() {
    console.log("listening on " + app.get("PORT"));
});