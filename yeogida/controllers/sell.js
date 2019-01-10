var express = require("express");
var router = express.Router();

// 내상품
router.post('/mysell_info',function(req,res){
  var mysellModel = require("../models/sell_mysell_info");

  mysellModel.info(req.body.seller_personpid).then((data)=>{
    res.json(data);
  });
});

//판매내역
router.post('/sold_info',function(req,res){
  var soldModel = require("../models/sell_sold_info");

  soldModel.info(req.body.seller_personpid).then((data)=>{
    res.json(data);
  });
});

module.exports = router;
