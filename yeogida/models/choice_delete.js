var productchoice=require("../config").productchoice;

exports.delete=(deleted_info)=>productchoice.destroy({
  where:deleted_info
}).catch(function(err){
  throw err;
})
