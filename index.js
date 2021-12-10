const data = require('./data.js');
const sum = require('./sum.js');

console.log(data.numbers);
console.log(`${data.name} is from ${data.hometown}`);
console.log(sum.sumNum(data.numbers));