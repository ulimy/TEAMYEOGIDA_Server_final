var productinfo=require('../config').productinfo;
var productsell=require('../config').productsell;


exports.update_info = (productpid) => productinfo.update({check:1},{where : {productpid : productpid}});
