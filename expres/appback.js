var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var routes = require("./routes/api");

var app = express();
app.use(cors);
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routes);
app.get("/", (req, res) => {
  console.log("server");
  res.send("server working");
});
app.listen(9000, () => {
  console.log("server Running on port ");
});
