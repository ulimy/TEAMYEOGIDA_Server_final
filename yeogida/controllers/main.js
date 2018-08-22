var express = require('express');
var router = express.Router();

var mainModel = require('../models/main');

router.get('/',function(req,res){

  mainModel.main(req.query)
    .then((data)=>{
      res.json(data);
    }).then((err)=>{
      if (err) console.error(err);
    });

});

module.exports = router;
