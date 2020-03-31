var express = require("express");

var PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var db = require("./models");
// Import routes and give the server access to them.
require("./controllers/art_controller")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});