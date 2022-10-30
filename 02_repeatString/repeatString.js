const repeatString = function(string, numOfTimes) {

   let repeatString = [];

   if (numOfTimes < 0) {

      return 'ERROR';

   } else {

      for (let i = 0; i < numOfTimes; i++) {
         repeatString.push(string);
      }

      return repeatString.join('');
      
   }
}
// Do not edit below this line
module.exports = repeatString;
