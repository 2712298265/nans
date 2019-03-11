var express = require('express');
var dateutils = require('../public/javascripts/dateutils')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jk', function(req, res, next) {
  let date = new Date();
  date.setHours(date.getHours() + 2);
  let data={
      time:date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  }
  res.json(data);
});

module.exports = router;
