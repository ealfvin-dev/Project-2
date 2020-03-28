const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    console.log(req.body);
    res.render("search", {artPieces: null});
});

module.exports = router;