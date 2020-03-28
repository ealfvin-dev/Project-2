const express = require("express");
const router = express.Router();

router.post("/", function(req, res) {
    console.log(req.body.pieces);
    res.render("search", {artPieces: req.body.pieces});
});

router.get("/", function(req, res) {
    console.log(req.body);
    res.render("search", {artPieces: null});
});

module.exports = router;