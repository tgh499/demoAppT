var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('AACR_GEINE', {
        title: 'About',
        name: 'Toru'
    });
});

module.exports = router;