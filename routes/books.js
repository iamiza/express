var express = require('express');
var router = express.Router();


router.get('/add', function(req, res, next) {
  res.render('addBooks', { title: 'Add Books' });
});

module.exports = router;
