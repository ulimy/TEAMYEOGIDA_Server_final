var productinfo=require('../config/database').productinfo;
var productsearch = require('../config/database').productsearch;
var productchoice = require('../config/database').productchoice;

// 제품 정보 돌려주기
exports.info=(input)=>Promise.all([

  // 제품 정보 찾기
  productinfo.findOne({
    attributes : {exclude : ['producthit','productphone','checker','personpid']},
    where : {productpid: input.productpid}
  }),

  // 찜 여부 확인하기
  productchoice.count({where : {choice_personpid : input.personpid, choice_productpid : input.productpid}})

]).then((data)=>{

  // 최근 본 상품에 추가
  insert_search(input);

  // hit++
  hit(input.productpid);

  // 전체 정보 합쳐서 리턴
  var result = data[0].dataValues;
  result.choicechecker = data[1];
  return result;
});

// 최근 본 상품 추가
insert_search = (input) => productsearch.findOrCreate({
  where : {search_personpid : input.personpid, search_productpid : input.productpid}
});

// hit++
hit = (productpid) => productinfo.increment('producthit',{where : {productpid : productpid}});
