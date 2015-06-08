// Dependencies
var bodyParser = require('body-parser');
var express = require('express');
var swig = require('swig');

// Ask Express to kindly start itself
var app = express();



// Parsing
app.use(bodyParser.urlencoded({ extended: false }));

//Let swig render
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');


// no caching when testing or you might not see changes
app.set('view cache', false);
swig.setDefaults({ cache: false });

//Includes
app.use(require('./pages/knex'));
app.use(require('./pages/index'));


//Express details
var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
