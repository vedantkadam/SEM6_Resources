var a = require('prompt-sync')();
var n1 = Number(a('Enter first number'));
var n2 = Number(a('Enter second number'));
var add = n1 + n2;
var sub = n1 - n2;
var mul = n1 * n2;
console.log("The sum of ".concat(n1, " and ").concat(n2, " is ").concat(add));
console.log("The substraction of ".concat(n1, " and ").concat(n2, " is ").concat(sub));
console.log("The multiplication of ".concat(n1, " and ").concat(n2, " is ").concat(mul));
