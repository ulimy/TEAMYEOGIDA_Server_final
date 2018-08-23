var express = require("express");
var router = express.Router();

// 내상품
router.post('/mysell_info',function(req,res){
  var mysellModel = require("../models/sell_mysell_info");
});

//판매내역
router.post('/sold_info',function(req,res){
  var soldModel = require("../models/sell_sold_info");
});

module.exports = router;
