var http = require('http');
var express = require('express');
var app = express();

app.get('*', function(req, res) {
	res.end('Hello World!');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('Listening at:' + port);
});
