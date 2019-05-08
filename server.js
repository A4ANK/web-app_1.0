var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/ad.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ad.jpg'));
});


var port = 8080;
app.listen(8080, function () {
  console.log(`Web-App is running on port ${port}!`);
});
