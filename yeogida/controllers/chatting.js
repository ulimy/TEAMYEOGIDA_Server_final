var express = require('express');
var router = express.Router();
var multer=require("multer");
var upload=multer();


// 채팅방 생성 및 채팅 내용 조회
router.post('/',upload.fields([]),function(req,res){
  var chatting = require('../models/chat_chatting');
  var chatinfo = require('../models/chat_info');

  var personpid=req.body.personpid;
  var productpid = req.body.productpid;
});

// 메시지 전송
router.post('/chat_message',upload.fields([]),function(req,res){
  var message  = require('../models/message');
  var chatinfo = require('../models/chat_info');
});