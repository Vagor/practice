var pet = {
  words: '...',
  speak: function(say) {
    console.log(say+' '+this.words);
  }
}
// pet.speak('Speak');

var dog = {
  words: 'Wang'
}

//通过call，把pet.speak里的this指向了dog，‘Speak’是向方法传递的参数
pet.speak.call(dog,'Speak')

//简单说就是dog有了pet的一个技能
