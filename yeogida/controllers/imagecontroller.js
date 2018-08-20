const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
//const multer =require('multer');
//const multerS3 =require('multer-s3');
//const axios=require("axios");
const Sequelize = require('sequelize');
const sequelize = new Sequelize('yeogida', 'admin', 'tkrhkdywjd2', {
  host: 'like-lion-yeogida.cvrv62aqsmyx.ap-southeast-1.rds.amazonaws.com',
  dialect: 'mysql',

const ImagePost = sequelize.define('productinfo', {
  productpid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  url: Sequelize.STRING, //사진이미지 경로텍스트
  productname: Sequelize.STRING, //판매 펜션이름
  productaddress_x : Sequelize.Float32Array,// 주소 x좌표
  productaddress_y : Sequelize.Float32Array,
  productUrl: Sequelize.STRING,
  productdate_s: Sequelize.DATE,
  productdate_e: Sequelize.DATE,
  productaddress : Sequelize.STRING,
  formerprice: Sequelize.INTEGER,
  productprice :Sequelize.INTEGER,
  producthit: Sequelize.INTEGER,
  checker : Sequelize.BOOLEAN,
  personpid: Sequelize.INTEGER
  //hotelphonenumber: Sequelize.STRING//펜션전번

//  description: Sequelize.TEXT,사용자 텍스트
});

ImagePost.sync({ alter: true });

app.use(cors());
app.use(bodyParser.json());


app.get('/images', function (req, res) {
  ImagePost.findAll()
      .then(function (result) {
          res.json(result);
          var q=JSON.stringify(result);
          var e =JSON.parse(q);

          var i=0;


        //  let dd=res.json(result);
          for(i; i<=result.length; i++){
          console.log(e[i].url);

          }
          res(e[i].url);
          console.log("YYYYY");
      })
      .catch(function (error) {
          res.json(error);
      });
});

app.post('/images', function (req, res) {
  ImagePost.create({
      productname: req.body.productname,
      //description: req.body.description,
      url: req.body.url,
      productdate_s: req.body.productdate_s,
      productdate_e: req.body.productdate_e,
      productaddress:  req.body.productaddress,
      formerprice:  req.body.formerprice,
      productprice:  req.body.productprice
      //hotelphonenumber:  req.body.hotelphonenumber /펜션전번
      //description: req.body.description,
  }).then(function () {
      // //res.json({
           message: 'success!',
      //     data: req.body


      // });
      console.log(req.files.upload.name);
  }).catch(function (error) {
      res.json({
          message: 'failed!', //실패할시
      });
      console.log(error);
  });
});

///////// 여기서부터
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  region: 'ap-southeast-1',
  signatureVersion: 'v4',
});

// app.get('/', function (req, res) {
//     res.json({
//         message: "Hello, Like-Lion! We're AUSG!",
//     });
// });

app.post('/generatePresignedUrl', function (req, res) {
  const key = `${Date.now()}_${req.body.filename}`
  const params = {
      Bucket: 'like-lion-yeogida',
      Key: key,
      ACL: 'public-read',
  }

  const presignedUrl = s3.getSignedUrl('putObject', params)
  res.json({
      url: `https://s3-ap-southeast-1.amazonaws.com/${params.Bucket}/${key}`,
      presignedUrl,

  })
})
///////// 여기까지 추가

///////// 여기서부터
app.use(express.static('public')) ;
///////// 여기까지 추가

app.listen(3000);
