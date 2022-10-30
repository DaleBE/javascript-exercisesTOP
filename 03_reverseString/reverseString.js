const reverseString = function(string) {

   let reversedString = string.split('').reverse().join('');

   return reversedString;
   
};

console.log(reverseString('Doorbell juice'));
// Do not edit below this line
module.exports = reverseString;
