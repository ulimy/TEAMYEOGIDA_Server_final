var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  var mainModel = require('../models/main');
  mainModel.main(req.query.area)
    .then((data)=>{
      res.json(data);
    }).then((err)=>{
      if (err) console.error(err);
    });

});

router.get('/browse',function(req,res){
  var mainModel = require('../models/main');
  mainModel.browse(req.query.word)
    .then((data)=>{
      res.json(data);
    }).then((err)=>{
      if (err) console.error(err);
    });
})

module.exports = router;
