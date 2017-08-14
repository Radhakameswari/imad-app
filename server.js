var express = require('express');	var express = require('express');
var morgan = require('morgan');	var morgan = require('morgan');
var path = require('path');	var path = require('path');

var app = express();	var app = express();
app.use(morgan('combined'));	app.use(morgan('combined'));

app.get('/', function (req, res) {	app.get('/', function (req, res) {
res.sendFile(path.join(dirname, 'ui', 'index.html'));	res.sendFile(path.join(dirname, 'ui', 'index.html'));
});	});

app.get('/ui/style.css', function (req, res) {	app.get('/ui/style.css', function (req, res) {
res.sendFile(path.join(dirname, 'ui', 'style.css'));	res.sendFile(path.join(dirname, 'ui', 'style.css'));
});	});

app.get('/ui/madi.png', function (req, res) {	app.get('/ui/madi.png', function (req, res) {
res.sendFile(path.join(dirname, 'ui', 'madi.png'));	res.sendFile(path.join(dirname, 'ui', 'madi.png'));
});	});

// Do not change port, otherwise your app won't run on IMAD servers	// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80	// Use 8080 only for local development if you already have apache running on 80

var port = 80;	
app.listen(port, function () {	app.listen(port, function() {
});  });