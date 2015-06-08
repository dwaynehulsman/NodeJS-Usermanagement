var bodyParser = require('body-parser');
var express = require('express');
var swig = require('swig');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// no caching when testing or you might not see changes
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.get('/', function(req, res) {
	res.render('index', { magic: "hello world" });
});

app.post('/test', function(req, res) {
	res.send(req.body);
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
