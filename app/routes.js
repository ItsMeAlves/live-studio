module.exports = function(app) {
    app.get("/", function(request, response) {
        return response.render("index");
    });
    
    app.get("/studio", function(request, response) {
        return response.render("studio");
    });

    app.get("/audience", function(request, response) {
        return response.render("audience");
    })
}