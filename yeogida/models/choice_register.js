var productchoice=require("../config").productchoice;

exports.register=(register_info)=> productchoice.findOrCreate({
  where:register_info
}).catch(function(err){
  throw err;
})
