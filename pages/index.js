var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('index', { title: "IOjs", subTitle: "Login" });
});

router.post('/', function(req, res) {
	knex('users').where({
		username: req.body.username,
		password: req.body.password
	}).select('id').then(function(id) {
		res.send(id);
	});
});

module.exports = router;
