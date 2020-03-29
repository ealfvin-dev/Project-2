const express = require("express");
const router = express.Router();
const fs = require("fs");

var db = require("../models");

router.get("/", function(req, res) {
    return fs.readFile(__dirname + "/../views/index.html", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });  
});
 //will have to change collection1 to recieveing a new table
router.post("/api/collection", function(req, res) {
    db.Collection.create(req.body).then(function(dbCollection) {
        res.json(dbCollection);
    });
});

module.exports = router;