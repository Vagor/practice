
var express = require('express');
var app = express();

app.set('view engine','ejs'); //使用模版引擎
app.set('views',__dirname+'/views');//定义views路径在子目录views下

app.use(express.static(__dirname));

app.get('/',function(req,res){
  res.render('home.ejs',{name:'yorkie'});//使用引擎的通用方法
})

app.get('/request/:name',function(req,res){
  res.render('home.ejs',{name:'Vagor','id':req.params['name']});
});


app.listen(3000);
