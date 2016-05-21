var http = require('http');
var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index.html');
});

app.post('/uploads/', upload.single('the-file'), function(req, res, next) {
	res.end("Your file's size is " + req.file.size + " bytes.");
});


var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('Listening at:' + port);
});
