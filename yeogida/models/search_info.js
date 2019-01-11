var productsearch=require('../config/database').productsearch;
var productinfo=require("../config/database").productinfo;

productsearch.belongsTo(productinfo,{targetKey:'productpid',foreignKey:'search_productpid'});

exports.info=(search_personpid)=>productsearch.findAll({
  attributes : {exclude : ['idx','search_personpid','search_productpid']},
  include:{
    model : productinfo,
    attributes : ['productpid', 'productname', 'formerprice', 'productprice', 'productdate_s', 'productdate_e','productimage','productaddress']
  },
}).then((data)=>{
  var result=[];
  for(var i=0;i<data.length;i++){
    result[i]=data[i].dataValues.productinfo;
  }
  return result;
});
