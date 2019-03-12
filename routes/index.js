var express = require('express');
var dateutils = require('../public/javascripts/dateutils')
var router = express.Router();
var moment = require('moment');
var pcasv = require('../public/javascripts/pcasv');


router.get('/addres', function (req, res, next) {
	let pro = req.query.pro || ""
	pcasv.forEach(element => {
		if (element.value === pro) {
			res.json(element.children);
		}
	});
	res.json({});	
});
/* GET home page. */
router.get('/', function (req, res, next) {
	let date = { title: 'moment日期格式化时间', time: moment().format('YYYY-MM-DD HH:mm:ss') }
	res.json(date);
});

module.exports = router;
