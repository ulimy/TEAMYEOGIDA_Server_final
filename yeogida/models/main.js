var productinfo = require("../config/database").productinfo;

exports.main = (area)=> productinfo.findAll({
  attributes : ['productpid', 'productname', 'formerprice', 'productprice', 'productdate_s', 'productdate_e','productimage','productaddress','producthit'],
  where : {
  // 사용기한이 지나지 않은 상품들만 노출
    productdate_s : {gt : new Date()},
    // 지역
    productaddress : {like : '%'+area+'%'},
    // 판매되지 않은 상품만 노출
    checker : 0
  }
}).then((data)=>{
  var result=[];
  for (var i=0;i<data.length;i++){
    result[i] = data[i].dataValues;
  }
  return result;
});

exports.browse = (word) => productinfo.findAll({
  attributes : ['productpid', 'productname', 'formerprice', 'productprice', 'productdate_s', 'productdate_e','productimage','productaddress'],
  where : {
    // 사용기한이 지나지 않은 상품들만 노출
      productdate_s : {gt : new Date()},
    // 검색어
    $or : [
      {productaddress : {like : '%'+word+'%'}},
      {productname : {like : '%'+word+'%'}}
    ],
    // 판매되지 않은 상품만 노출
    checker : 0
  }
}).then((data)=>{
  var result=[];
  for (var i=0;i<data.length;i++){
    result[i] = data[i].dataValues;
  }
  return result;
});
