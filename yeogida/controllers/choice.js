var express = require('express');
var router = express.Router();

//찜한 상품 리스트 보여주기(판매된거,이미 기한 지난건 x)
router.post('/info',function(req,res){
  var infoModel = require('../models/choice_info');

  infoModel.info(req.body)
    .then((data)=>{
      res.json(data);
    }).catch(err=>{
      res.json({message : "failed"});
    });

  });

//찜한 상품 등록하기
router.post('/register',function(req,res){
  var registerModel = require('../models/choice_register');
  var register_info=req.body;
  registerModel.register(register_info)
  .then(()=>{
    res.json({message:"success"})
  }).catch(err => {
    res.json({message : "failed"});
  })
});

//찜한 상품 productchoice에서 삭제하기
router.post('/delete',function(req,res){
  var deletedModel = require('../models/choice_delete');
  var deleted_info=req.body;
  deletedModel.delete(deleted_info)
  .then(()=>{
    res.json({message:"success"});
  })
  .catch(err => {
    res.json({message : "failed"});
  });
});

module.exports = router;
