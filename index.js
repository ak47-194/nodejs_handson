const express = require("express");
const bodyParser= require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.get("/about", (req, res) => res.send("Amrit Dash"));

app.get("/contact", (req, res) => res.send("ph no 79xxxxxxxxx"));

app.post("/", function(req, res) {
  var num1=Number(req.body.n1);
  var num2=Number(req.body.n2);
  var result=num1+num2;
  res.send("The result of your calculation is " + result);
})
app.listen(3000, function() {
  console.log("server started on port 3000");
});