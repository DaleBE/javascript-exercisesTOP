const palindromes = function (inputString) {

   let newString = inputString.replace(/ /g, '').toLowerCase();

   let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

   let cleanString = (newString) => {
      return newString
         .split('')
         .filter(function(letter) {
            return punctuation.indexOf(letter) === -1;
         })
         .join('');
   }

   const stringOne = cleanString(newString);
   const stringTwo = cleanString(newString)
                                       .split('')
                                       .reverse()
                                       .toString()
                                       .replace(/,/g, '');

   console.log(stringOne);
   console.log(stringTwo);


   if (stringOne === stringTwo) {
      return true
   } else {
      return false
   }


};
let inputString = 'A car, a man, a maraca.'
console.log(palindromes(inputString))


// Do not edit below this line
module.exports = palindromes;
