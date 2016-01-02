// //this point at pet
// var pet = {
//   words:'...',
//   speak:function() {
//     console.log(this.words);
//     console.log('this point at pet');
//     console.log(this);
//   }
// }

// pet.speak();




// //this point at global
// function pet(words) {
//   this.words = words;
//   console.log(this.words);
//   console.log('this point at global');
//   console.log(this);
// }

// pet('...')




//

function pet(words) {
  this.words = words
  this.speak = function() {
    console.log(this.words);
    console.log(this);
  }
}

var cat = new pet('miao');

cat.speak();