var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(8000, function () {
  console.log("yo yo yo, on 8000!!")
});