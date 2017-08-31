var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/get_data', function(req, res, next) {
request('https://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1', function (error, response, body) {
    if (!error && response.statusCode == 200) {
       
         res.json({
      success: "true",
      message: "Login Success",
      data: body
    });
     }
})
});
module.exports = router;
