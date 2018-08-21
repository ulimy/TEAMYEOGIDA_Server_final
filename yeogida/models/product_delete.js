var productinfo=require('../config').productinfo;

exports.delete=(productpid)=> productinfo.destroy({
  where : {productpid: productpid}
});
