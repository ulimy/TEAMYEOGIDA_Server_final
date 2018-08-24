var productpurchase=require("../config/database").productpurchase;
var productinfo=require('../config/database').productinfo;

//db랑 productpurchase join하기
productpurchase.belongsTo(db,{targetKey:'productpid',foreignKey:'sold_productpid'});

exports.info=(buyer_personpid)=>productpurchase.findAll({
  attributes:{exclude:['idx','buyer_personpid','sold_productpid']},
  include:{
    model : productinfo,
    attribute :{exclude:[ "idx","producthit","productphone","checker","personpid"]},
    where: {personpid : buyer_personpid}
  }
}).then((data)=>{
  var result=[];
  for(var i=0;i<data.length;i++){
    result[i]=data[i].dataValues;
  }
  return result;
});
