function pet(words) {
  this.words = words,
  this.speak = function() {
    console.log(this.words);
  }
}

function Dog(words) {
  pet.call(this,words)
  //pet.apply(this,arguments)
}

var dog = new Dog('Wang')

dog.speak()