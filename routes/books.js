var express = require('express');
var router = express.Router();
var books = require("../resources/books")


router.get('/add', function(req, res, next) {
  res.render('addBooks', { title: 'Add Books' });
});

module.exports = router;

router.post('/save',function(req,res,next){
  books.push({...req.body, _id:`00${books.length + 1}`})
  res.redirect('/')
})

