const sumAll = function(firstNum, secondNum) {

   let startNum = firstNum;

   let endNum = secondNum;

   if (typeof firstNum != 'number' || typeof secondNum != 'number') {
      return 'ERROR';
   } else if (firstNum < 0 || secondNum < 0) {
      return 'ERROR';
   } else if (firstNum > secondNum) {
      startNum = secondNum;
      endNum = firstNum;
   };

    // variable to hold final sum
   let finalSum = startNum;

   // variable to hold next number to add
   let nextNum = startNum;

   while (startNum < endNum) {
      nextNum++;
      finalSum = finalSum + nextNum;
      startNum++;
   };

   return finalSum;
};

console.log(sumAll(1, 123));
// Do not edit below this line
module.exports = sumAll;
