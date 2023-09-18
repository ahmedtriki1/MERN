const AuthorsController = require("../controllers/authors.controllers");

module.exports = (app) =>{
    app.get("/api/Authors", AuthorsController.readAll);
    app.post("/api/Authors", AuthorsController.create);
    app.get("/api/Authors/:id", AuthorsController.findOne);
    app.put("/api/Authors/:id", AuthorsController.update);
    app.delete("/api/Authors/:id", AuthorsController.delete);

}