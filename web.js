var express = require('express');
var fs = require('fs');
var data = fs.readFileSync('index.html', 'utf-8');

var app = express.createServer(express.logger());
var buf =new Buffer(2560, 'utf8');

var l=buf.write(data, 0, "utf8");


app.get('/', function(request, response) {
  response.send(buf.toString('utf8', 0, l));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

