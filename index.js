var express = require('express');
var port    = process.env.PORT || 9999;
var app     = express();

app.get('/', function(req, res) {
  res.send("Ohai there!");
});

app.use(express.logger());
app.listen(port, function() {
  console.log("Listening to the kings of leon and port "+ port);
});
