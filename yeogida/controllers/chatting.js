var express = require('express');
var router = express.Router();
var multer=require("multer");
var upload=multer();

// 채팅목록 조회
router.post('/info',upload.fields([]),function(req,res){
  var purchaseinfoModel = require('../models/purchase_info');
  var personpid=req.body.personpid;

  purchaseinfoModel.info(personpid)
  .then((data)=>{
      res.json(data);
    }).then((err)=>{
      if (err) console.error(err);
    });
});
