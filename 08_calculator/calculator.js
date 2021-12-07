const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
	
};

const sum = function(array) {
  return array.reduce((a, b) => a +b, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b);
};

const power = function(x, y) {
  return Math.pow(x, y);
	
};

const factorial = function(n) {
  return n == 0 ? 1 : n * factorial(n-1);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
