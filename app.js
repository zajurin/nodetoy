const _ = require('lodash');

let numbers = [1, [2, [3, [4]]]];

const number1 = _.flattenDepth(numbers, 1);
const number2 = _.flattenDepth(numbers, 2);
const number3 = _.flattenDepth(numbers, 4);
const number4 = _.flattenDepth(numbers, 4);

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
