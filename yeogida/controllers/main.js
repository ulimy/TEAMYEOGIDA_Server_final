var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();

router.get('/',upload.fields([]),function(req,res){
  var mainModel = require('../models/main');

  mainModel.main(req.body)
    .then((data)=>{
      res.json(data);
    }).then((err)=>{
      if (err) console.error(err);
    });

});

module.exports = router;
