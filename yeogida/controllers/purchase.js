var express = require('express');
var router = express.Router();

// 구매내역
router.post('/info',function(req,res){
  var purchaseinfoModel = require('../models/purchase_info');

  purchaseinfoModel.info(req.body)
  .then((data)=>{
      res.json(data);
  })
  .catch((err) =>{
    res.json({message : "failed"});
  });
});

module.exports = router;
