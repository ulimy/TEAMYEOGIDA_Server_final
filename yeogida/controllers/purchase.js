var express = require('express');
var router = express.Router();

// 구매내역
router.post('/info',function(req,res){
  var purchaseinfoModel = require('../models/purchase_info');
  var personpid=req.body.buyer_personpid;

  purchaseinfoModel.info(personpid)
  .then((data)=>{
      res.json(data);
    }).then((err)=>{
      if (err) console.error(err);
    });
});

module.exports = router;
