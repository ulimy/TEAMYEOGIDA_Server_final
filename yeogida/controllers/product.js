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
  var registerModel = require('../models/product_register');
  var map=require('../api/map_api');
  var register_info=req.body;

  // 좌표값 변환하여 productinfo 에 저장
  map.getPoint(register_info.productaddress).then(function(point){
    register_info.productaddress_x = point[0];
    register_info.productaddress_y = point[1];
    registerModel.register(register_info)
      .then(data=>{
        // productsell에 추가
        registerModel.insert_sell(data);
      });
  });

});

// 제품 수정
router.post('/update',function(req,res){
  var updateModel = require('../models/product_update');
  var map=require('../api/map_api');
  var update_info=req.body;
  // 좌표값 변환하여 productinfo 에 저장
  map.getPoint(update_info.productaddress).then(function(point){
    update_info.productaddress_x = point[0];
    update_info.productaddress_y = point[1];
    var productpid = update_info.productpid;
    delete update_info.productpid;
    updateModel.update(update_info,productpid);
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
