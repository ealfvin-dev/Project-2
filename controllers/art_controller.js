const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/", function(req, res) {
    console.log(req.body.pieces);
    res.render("search", {artPieces: req.body});
});

router.get("/", function(req, res) {
    return fs.readFile(__dirname + "/../views/index.html", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });  
});

module.exports = router;