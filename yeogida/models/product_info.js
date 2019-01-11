var productinfo=require('../config/database').productinfo;
var productsearch = require('../config/database').productsearch;
var productchoice = require('../config/database').productchoice;

// 제품 정보 돌려주기
exports.info=(input)=> productinfo.findAll({
  attributes : {exclude : ['producthit','productphone','checker','personpid']},
  where : {productpid: input.productpid}
}).then(function (data){

  // 최근 본 상품 추가
  insert_search(input);

  // hit++
  hit(input.productpid);

  var result=[];
  for(var i=0; i<data.length;i++){
    result[i]=data[i].dataValues;

    //  찜 여부 확인
    if (checkchoice(input)==true){
      result[i].choicechecker = true;
    }else{
      result[i].choicechecker = false;
    }
  }
  return result;
});


// 찜 여부 확인
checkchoice = (input) => {
  return productchoice.count({where : {choice_personpid : input.personpid, choice_productpid : input.productpid}})
  .then((count)=>{
    if (count !=0 ){
      return true;
    }
    return false;
  });
}

// 최근 본 상품 추가
insert_search = (input) => productsearch.findOrCreate({
  where : {search_personpid : input.personpid, search_productpid : input.productpid}
});

// hit++
hit = (productpid) => productinfo.increment('producthit',{where : {productpid : productpid}});
