var chatmessage = require('../config/database').chatmessage;

// 룸피드 받아서 insert
exports.insert=(message)=>chatmessage.findOrCreate({
  where : message
});
// 푸시알람
