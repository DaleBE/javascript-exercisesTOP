const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arrayIn) {

   return arrayIn.reduce((total, index) => {
      return total + index
   }, 0)
	
};

const multiply = function(arrayIn) {

   return arrayIn.reduce((total, index) => {
      return total * index
   }, 1)

};

const power = function(root, exponent) {
	
   return root ** exponent

};

const factorial = function(numIn) {
	
   let factoralArray = [];

   for (let i = 1; i <= numIn; i++) {
      factoralArray.push(i)
   };

   return factoralArray.reduce((total, index) => {
      return total * index
   }, 1)

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
