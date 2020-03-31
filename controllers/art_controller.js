

var db = require("../models");

module.exports = function(app) {

app.get("/", function(req, res) {
    return fs.readFile(__dirname + "/../views/index.html", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });  
});
 

app.post("/api/collection", function(req, res) {
    db.Collections.create(req.body).then(function(dbCollection) {
        res.json(dbCollection);
    });
});


app.post("/api/gallery", function(req, res) {
    db.Gallery.create(req.body).then(function(dbGallery) {
        res.json(dbGallery);
    })
})
};