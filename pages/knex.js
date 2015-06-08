var express = require('express');
var router = express.Router();

// Knex login to database
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : 'Yne4RGMygSu4PvSE',
    database : 'iojspanel'
  }
});

module.exports = router;
