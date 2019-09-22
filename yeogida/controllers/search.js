var express = require('express');
var router = express.Router();

router.post('/info',function(req,res){
  var infoModel = require('../models/search_info');
  var personpid=req.body.search_personpid;

  infoModel.info(personpid)
  .then((data)=>{
      res.json(data);
  })
  .catch((err) =>{
    res.json({message : "failed"});
  });
});

module.exports = router;
