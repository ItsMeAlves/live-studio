module.exports = function(app) {
    app.get("/", function(request, response) {
        return response.render("index");
    });
    
    app.get("/studio", function(request, response) {
        return response.render("studio");
    });
  
    app.get("/crowd", function(request, response) {
        return response.render("crowd");
    });
}