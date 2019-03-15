let aws = require('aws-sdk');
let multer = require('multer');
let multerS3=require('multer-s3');
aws.config.loadFromPath('./awsconfig.json');
let s3 = new aws.S3({
  s3ForcePathStyle: true
});
const storageS3 = multerS3({
  s3: s3,
  bucket: 'yeogida',
  acl: 'public-read',
  key: function (req, file, callback) {
    var fname = Date.now() + '_' + file.originalname;
    console.log(fname);
    callback(null, fname);
  }
});
exports.uploadSingle = multer({storage: storageS3,limits:{fileSize:100000000}}).single('productimage');
