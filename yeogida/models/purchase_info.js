var productpurchase=require("../config/database").productpurchase;
var productinfo=require('../config/database').productinfo;

//productinfo, productpurchase join하기
productpurchase.belongsTo(productinfo,{targetKey:'productpid',foreignKey:'sold_productpid'});

exports.info=(buyer_personpid)=>productpurchase.findAll({
  attributes:{exclude:['buyer_personpid','sold_productpid','idx']},
  where : buyer_personpid,
  include:{
    model : productinfo,
    attributes :['productpid', 'productname', 'formerprice', 'productprice', 'productdate_s', 'productdate_e','productimage','productaddress']
  }
}).then((data)=>{
  var result=[];
  for(var i=0;i<data.length;i++){
    result[i]=data[i].dataValues.productinfo;
  }
  return result;
});
