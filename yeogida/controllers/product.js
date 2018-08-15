var express = require('express');
var router = express.Router();

router.get('/info',function(req,res){
  var info = require('../models/product_info');
});


router.post('/register',function(req,res){
  var register = require('../models/product_register');

});

router.post('/update',function(req,res){
  var update = require('../models/product_update');
});

router.post('/delete',function(req,res){
  var deleted = require('../models/product_delete');
});

router.post('/complete',function(req,res){
  var complete = require('../models/product_complete');
});

module.exports = router;
