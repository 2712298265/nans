var express = require('express');
var router = express.Router();

router.get('/pay', function (req, res, next) {
    let data = {};
    data.status = 0;
    data.msg = "支付成功！";
    res.json(data);
});

module.exports = router;