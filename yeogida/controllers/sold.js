var express = require('express');
var router = express.Router();

router.post('/buyinfo',function(req,res){
  var buyinfo = require('../models/sold_buyinfo');
});

router.post('/sellinfo',function(req,res){
  var sellinfo = require('../models/sold_sellinfo');
});

module.exports = router;
