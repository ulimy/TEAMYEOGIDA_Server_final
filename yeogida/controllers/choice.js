var express = require('express');
var router = express.Router();

router.post('/info',function(req,res){
  var info = require('../models/choice_info');
});


router.post('/register',function(req,res){
  var register = require('../models/choice_register');

});

router.post('/delete',function(req,res){
  var deleted = require('../models/choice_delete');
});

module.exports = router;
