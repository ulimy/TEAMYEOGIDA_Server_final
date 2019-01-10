var express = require('express');
var router = express.Router();

// 구매내역
router.post('/info',function(req,res){
  var purchaseinfoModel = require('../models/purchase_info');

  purchaseinfoModel.info(req.body)
  .then((data)=>{
      res.json(data);
    }).then((err)=>{
      if (err) throw(err);
    });
});

module.exports = router;
