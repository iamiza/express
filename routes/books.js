var express = require('express');
var router = express.Router();
const Books = require('../models/books')

router.get('/add', function(req, res, next) {
  res.render('addBooks', { title: 'Add Books' });

});

router.post('/save',async function(req,res,next){
  await Books.insertMany([req.body]);
  res.redirect('/')
})

router.get('/edit/:_id', async function(req, res, next){
  const book = await Books.findOne({_id: req.params._id});
  res.render('editBooks', {title: "Edit Books", book})
})

router.post('/saveEdited/:_id',async function (req,res,next){
  await Books.findOneAndUpdate({ _id: req.params._id }, { ...req.body })
  res.redirect('/')
})

router.get('/deleteBooks/:_id', async function(req,res,next){
  await Books.findOneAndDelete({ _id: req.params._id }, { ...req.body })

  res.redirect('/')
  
})

module.exports = router;
