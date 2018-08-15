var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/',function(req,res){
  var adr_json = {
    "result": {
        "total": 1,
        "userquery": "연사리 93",
        "items": [
            {
                "address": "경상남도 거제시 연초면 연사리 93",
                "addrdetail": {
                    "country": "대한민국",
                    "sido": "경상남도",
                    "sigugun": "거제시",
                    "dongmyun": "연초면",
                    "ri": "연사리",
                    "rest": "93"
                },
                "isRoadAddress": false,
                "point": {
                    "x": 128.6521583,
                    "y": 34.9070498
                }
            }
        ]
    }
  };

  var adr = adr_json.result.items[0].address;

 var api_url = 'https://openapi.naver.com/v1/map/geocode?query=' + encodeURI(adr); // json

 var request = require('request');
 var options = {
     host: 'openapi.naver.com',
     url: api_url,
     headers: {'X-Naver-Client-Id':'', 'X-Naver-Client-Secret': ''}
  };
 request.get(options, function (error, response, body) {
   if (!error && response.statusCode == 200) {
     console.log(body);
   } else {
     res.status(response.statusCode).end();
     console.log('error = ' + response.statusCode);
   }
 });
});

module.exports = router;
