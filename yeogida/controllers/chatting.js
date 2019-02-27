var express = require('express');
var router = express.Router();

// 채팅방 생성 및 채팅 내용 조회 - 구매하기 화면에서 채팅하기
router.post('/frompurchase',function(req,res){
  var chatroomModel = require('../models/chat_chatroom');
  var chatinfoModel = require('../models/chat_info');

  // 채팅방이 없다면 만들고, roompid return
  chatroomModel.getroompid(req.body)
  .then((roompid)=>{
    // roompid로 메시지들 뽑아서 보내기
    chatinfoModel.getmessages(roompid)
    .then((result)=>{
      if (result==null){
        res.json(roompid);
      }else{
        res.json(result);
      }
    });
  });
});

// 채팅방 생성 및 채팅 내용 조회  - 채팅 목록에서 채팅하기
router.post('/fromlist',function(req,res){
  var chatinfoModel = require('../models/chat_info');
  // roompid로 메시지들 뽑아서 보내기
  chatinfoModel.getmessages(req.body)
  .then((result)=>{
    res.json(result);
  });
});


// 메시지 전송
router.post('/message',function(req,res){
  var messageModel  = require('../models/chat_message');

  //현재시각 구하기
  var moment = require('moment');
  require('moment-timezone');
  moment.tz.setDefault("Asia/Seoul");
  var mydate = moment().format('YYYY-MM-DD HH:mm:ss');

  // 현재시각 메시지에 추가
  var message = req.body;
  message.date = mydate;

  // 메시지 디비에 추가하기
  messageModel.insert(message)
  .then(() => {
    res.json({message : "success"});
  })
  .catch(err => {
    console.error(err);
    res.json({message : "failed"});
  });
});

// 채팅 목록 조회 - 판매자
router.post('/list/seller',function(req,res){
  var chatlistModel = require('../models/chat_list');

  chatlistModel.getlist_seller(req.body)
  .then((result)=>{
    res.json(result);
  })
  .catch(err => {
    console.error(err);
    res.json({message : "failed"});
  });
});

// 채팅 목록 조회 - 구매자
router.post('/list/buyer',function(req,res){
  var chatlistModel = require('../models/chat_list');

  chatlistModel.getlist_buyer(req.body)
  .then((result)=>{
    res.json(result);
  })
  .catch(err => {
    console.error(err);
    res.json({message : "failed"});
  });
});

module.exports = router;
