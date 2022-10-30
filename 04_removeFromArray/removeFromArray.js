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

console.log(removeFromArray(['hello', 2, 3, 'world'], 3, 2, 'world'));

// Do not edit below this line
module.exports = removeFromArray;
