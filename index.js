const data = require('./data.js');
const sum = require('./sum.js');
const cowsay = require('cowsay');
const lodash = require('lodash');

console.log(data.numbers);
console.log(`${data.name} is from ${data.hometown}`);
console.log(sum.sumNum(data.numbers));
console.log(cowsay.say({text: "Hello World!"}));
console.log(lodash.shuffle(data.numbers));
