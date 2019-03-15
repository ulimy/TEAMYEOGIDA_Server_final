var Sequelize = require('Sequelize');

var sequelize = new Sequelize('yeogida','admin','smulookie123*',

    {
      'host' : 'yeogida.cdsjvkz1an0k.ap-northeast-2.rds.amazonaws.com',
      'dialect' : 'mysql',
  }
);

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
  tableName: profile,
  charset: 'utf8',
  collate: 'utf8_unicode_ci'
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
  producthit: {
    type : Sequelize.INTEGER,
    defaultValue : 0
  },
  checker : {
  type : Sequelize.BOOLEAN,
  defaultValue : false
  },
  personpid: Sequelize.INTEGER,
  text:Sequelize.TEXT,
  productphone:Sequelize.INTEGER,

}, {
    timestamps:false,
    tableName:productinfo,
  charset: 'utf8',
  collate: 'utf8_unicode_ci'
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
  tableName : productchoice,
  charset: 'utf8',
  collate: 'utf8_unicode_ci'
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
  tableName : productsearch,
  charset: 'utf8',
  collate: 'utf8_unicode_ci'
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
  type : Sequelize.BOOLEAN,
  defaultValue : false
  },
},{
  timestamps : false,
  tableName : productsell,
  charset: 'utf8',
  collate: 'utf8_unicode_ci'
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
  tableName : productpurchase,
  charset: 'utf8',
  collate: 'utf8_unicode_ci'
});

var chatroom=sequelize.define('chatroom',{
  roompid :{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  personpid : {
    type : Sequelize.INTEGER,
    references : profile.personpid
  },
  productpid : {
    type : Sequelize.INTEGER,
    references : productinfo.productpid
  }
},{
  timestamps : false,
  tableName : chatroom,
  charset: 'utf8',
  collate: 'utf8_unicode_ci'
});

var chatmessage=sequelize.define('chatmessage',{
  idx : {
    type : Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement : true
  },
  roompid : {
    type: Sequelize.INTEGER,
    references: chatroom.roompid
  },
  personpid: {
    type: Sequelize.INTEGER,
    references: profile.personpid
  },
  message : {type: Sequelize.STRING},
  date : {type: Sequelize.DATE}
},{
  timestamps : false,
  tableName : chatmessage,
  charset: 'utf8',
  collate: 'utf8_unicode_ci'
});

profile.sync();
productinfo.sync();
productinfo.sync();
productchoice.sync();
productsearch.sync();
productsell.sync();
productpurchase.sync();
chatroom.sync();
chatmessage.sync();

module.exports={
  profile:profile,
  productinfo :productinfo,
  productchoice : productchoice,
  productsearch : productsearch,
  productsell : productsell,
  productpurchase : productpurchase,
  chatroom : chatroom,
  chatmessage : chatmessage
};
