var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' , username: '모든것', id: 'user01'});
  //res.redirect("/prod");
  // res.send("hello");
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
  // const filepath = 'D:/uploads/4db6687d2eafe89f48273e62e449fa9c';
  // const filename = 'img.jpg'; 
  // res.setHeader('Content-Disposition', `attachment; filename=${filename}`); // 이게 핵심 
  // res.sendFile(filepath);
});

router.get('/prod',function(req, res, next){
  let data = [ 
    {no: 1, name: '키보드', price: 1000},
    {no: 2, name: '마우스', price: 2000},
    {no: 3, name: '모니터', price: 3000}
  ]
  res.render('productList', {list: data} );
})

module.exports = router;
