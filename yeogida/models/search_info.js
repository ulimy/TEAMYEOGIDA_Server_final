var productsearch=require('../config/database').productsearch;
var db=require("../config/database").productinfo;

productsearch.belongsTo(db,{targetKey:'productpid',foreignKey:'search_productpid'});

exports.info=(search_personpid)=>productsearch.findAll({
  attributes : {exclude : ['idx','search_personpid','search_productpid']},
  include:{model : db,
  attribute : {exclude:["idx","producthit","productphone","checker","personpid"]
},
},
where:{
  search_personpid:search_personpid
}
}).then((data)=>{
  var result=[];
  for(var i=0;i<data.length;i++){
    result[i]=data[i].dataValues;
  }
  return result;
});
