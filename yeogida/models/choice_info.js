var productchoice=require('../config/database').productchoice;
var productinfo = require('../config/database').productinfo;

//찜한 상품 리스트 보여주기
//db랑 productchoice join하기
productchoice.belongsTo(productinfo, {targetKey:'productpid',foreignKey: 'choice_productpid'});
exports.info=(input) =>productchoice.findAll({
  attributes : { exclude: [ "idx","choice_productpid","choice_personpid"] },
  where: input ,
  //join의 조건
  include : {
    model: productinfo,
   attributes : ['productpid', 'productname', 'formerprice', 'productprice', 'productdate_s', 'productdate_e','productimage','productaddress'],
   where : {

     //사용 기한 지나지 않은 찜한 상품만 노출
     productdate_s :{gt: new Date()},

     //판매되지 않은 찜한 상품만 노출
     checker:0

   }
  }
}).then((data)=>{
  var result=[];
  for(var i=0;i<data.length;i++){
    result[i]=data[i].dataValues.productinfo;
  }
  return result;
});
