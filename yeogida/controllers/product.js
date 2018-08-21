var express = require('express');
var router = express.Router();
var client_id = '';
var client_secret = '';
var request = require('request');

// 제품 상세조회
router.post('/info',function(req,res){
  var infoModel = require('../models/product_info');
  // 최근 본 상품 추가
  infoModel.insert_search(req.body);
  // hit ++
  infoModel.hit(req.body.productpid);
  // 제품 정보 돌려주기
  infoModel.info(req.body.productpid)
  .then(data=>{
    res.json(data);
  });
});

// 제품 등록
router.post('/register',function(req,res){
  console.log("who get");
  var registerModel = require('../models/product_register');
  var map=require('../api/map_api');
  var register_info=req.body;
  console.log(register_info);
  map.getPoint(register_info.productaddress).then(function(point){
    registerModel.register(register_info,point[0],point[1]);

  });

});

// 제품 수정
router.post('/update',function(req,res){
  var updateModel = require('../models/product_update');
  var map=require('../api/map_api');
  var update_info=req.body;
  map.getPoint(update_info.productaddress).then(function(point){

    updateModel.update(update_info,point[0],point[1]);

  });
});

// 제품 삭제
router.get('/delete',function(req,res){
  var deletedModel = require('../models/product_delete');
  var productpid=req.query.productpid;
  deletedModel.delete(productpid);


});

// 구매 확정
router.post('/complete',function(req,res){
  var complete = require('../models/product_complete');
});

module.exports = router;
