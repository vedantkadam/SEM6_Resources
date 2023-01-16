const a = require('prompt-sync')();
let n1: number = Number(a('Enter first number'));
let n2: number = Number(a('Enter second number'));

let add = n1 + n2;
let sub = n1 - n2;
let mul = n1 * n2;

console.log(`The sum of ${n1} and ${n2} is ${add}`)
console.log(`The substraction of ${n1} and ${n2} is ${sub}`)
console.log(`The multiplication of ${n1} and ${n2} is ${mul}`)








