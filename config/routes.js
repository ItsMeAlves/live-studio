module.exports = function(app) {
    app.get("/", function(request, response) {
        return response.render("index");
    });
}