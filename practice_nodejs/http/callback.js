//回调函数为具名函数
function learn(something) {
  console.log(something);
}

function we(callback, something) {
  something += ' is cool';
  callback(something);
}

we(learn, 'Nodejs');

//回调函数为匿名函数
we(function(something) {
  console.log(something);
},'Jade');