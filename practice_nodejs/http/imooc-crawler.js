var http = require('http.js')
var url = 'http://www.imooc.com/learn/348'

http.get(url,function(res) {
  var html = ''

  res.on('data',function（data) {
    html += data
  })

  res.on('end',function(){
    console.log(html);
  })
}).on('error',function(){
  console.log(error);
})