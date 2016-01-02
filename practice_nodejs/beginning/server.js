var http = require('http');
var server = http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('hello\n');
})

server.listen(1337,'127.0.0.1');//服务器监听127.0.0.1:1337，收到请求后执行回调函数
console.log('ok');