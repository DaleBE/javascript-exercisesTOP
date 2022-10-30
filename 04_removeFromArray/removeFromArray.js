const removeFromArray = function(array, item) {

   for (let p = 1; p <= arguments.length; p++) {

      for (let i = 0; i <= array.length; i++) {
            if (array[i] === arguments[p]) {

                array.splice(i, 1);

            }
      };
   
   }

   return array;

};

// alternative way using rest parameters

/*const removeFromArray = function(...args) {

   //pull out array to work with
   const array = args[0];

   //define new array to hold the return items
   const newArray = [];

   // create an arrow fuction to run through each item in the array
   array.forEach((item) => {
      
      // check that for the arguments passed and push only the unpassed arguments to the new array
      if (!args.includes(item)) {
         newArray.push(item);
      }
   });
   //return array with new items
   return newArray;
};*/

console.log(removeFromArray(['hello', 2, 3, 'world'],'' , 2, 'world'));
// Do not edit below this line
module.exports = removeFromArray;
