var express = require('express');
var router = express.Router();
var moment = require('moment');
var pcasv = require('../public/javascripts/pcasv');

/**
 * 获取省市区
 */
router.get('/addres', function (req, res, next) {
	let pro = req.query.pro
	let result = {
		status: 0,
		msg: "查询成功！",
		data: {}
	}
	let array = []
	pcasv.forEach(province => { //循环省
		if (province.value === pro) {
			array.push(province)
		}
		province.children.forEach( //循环市
			city => {
				if (city.value === pro) {
					array.push(city)
				}
				city.children.forEach( //循环区
					area => {
						if (area.value === pro) {
							array.push(area)
						}
					}
				)
			}
		)
	});
	if (array.length > 0) {
		result.data = array;
	}
	res.json(result);
});

/**
 * 获取格式话日期
 */
router.get('/getformatdate', function (req, res, next) {
	let date = {
		title: 'moment日期格式化时间',
		time: moment().format('YYYY-MM-DD HH:mm:ss')
	}
	res.json(date);
});

module.exports = router;