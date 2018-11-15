var Sequelize = require('Sequelize');

var sequelize = new Sequelize('yeogida','moonsun','201611070',
  {
    'host' : 'yeogida.cbdgg8cil0ro.ap-southeast-1.rds.amazonaws.com',
    'dialect' : 'mysql'
});

var profile=sequelize.define('profile',{
  personpid: {
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
  },
  phone : Sequelize.INTEGER,
  kakaonickname:Sequelize.STRING,
  token :Sequelize.STRING,
  email:Sequelize.STRING,
  kakaopid:Sequelize.STRING
}, {
  timestamps : false,
  tableName: profile
});

var productinfo=sequelize.define('productinfo', {
  productpid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  productimage: Sequelize.STRING, //사진이미지 경로텍스트
  productname: Sequelize.STRING, //판매 펜션이름
  productaddress_x : Sequelize.FLOAT,// 주소 x좌표
  productaddress_y : Sequelize.FLOAT,
  productUrl: Sequelize.STRING,
  productdate_s: Sequelize.DATE,
  productdate_e: Sequelize.DATE,
  productaddress : Sequelize.STRING,
  formerprice: Sequelize.INTEGER,
  productprice :Sequelize.INTEGER,
  producthit: Sequelize.INTEGER,
  checker : Sequelize.BOOLEAN,
  personpid: Sequelize.INTEGER,
  text:Sequelize.TEXT,
  productphone:Sequelize.INTEGER,

}, {
    timestamps:false,
    tableName:productinfo
});

var productchoice=sequelize.define('productchoice', {
  idx : {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  choice_productpid : {
    type: Sequelize.INTEGER,
    references : productinfo.productpid
  },
  choice_personpid : {
    type: Sequelize.INTEGER,
    references : profile.personpid
  }
},{
  timestamps : false,
  tableName : productchoice
});

var productsearch=sequelize.define('productsearch', {
  idx : {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  search_productpid : {
    type: Sequelize.INTEGER,
    references : productinfo.productpid
  },
  search_personpid : {
    type: Sequelize.INTEGER,
    references : profile.personpid
  }
},{
  timestamps : false,
  tableName : productsearch
});

var productsell=sequelize.define('productsell', {
  idx : {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  sell_productpid : {
    type: Sequelize.INTEGER,
    references : productinfo.productpid
  },
  seller_personpid : {
    type: Sequelize.INTEGER,
    references : profile.personpid
  },
  checker : {
    type: Sequelize.BOOLEAN
  }
},{
  timestamps : false,
  tableName : productsell
});

var productpurchase=sequelize.define('productpurchase', {
  idx : {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  sold_productpid : {
    type: Sequelize.INTEGER,
    references : productinfo.productpid
  },
  buyer_personpid : {
    type: Sequelize.INTEGER,
    references : profile.personpid
  }
},{
  timestamps : false,
  tableName : productpurchase
});



profile.sync();
productinfo.sync();
productchoice.sync();
productsearch.sync();
productsell.sync();
productpurchase.sync();

module.exports={
  profile:profile,
  productinfo :productinfo,
  productchoice : productchoice,
  productsearch : productsearch,
  productsell : productsell,
  productpurchase : productpurchase
};
