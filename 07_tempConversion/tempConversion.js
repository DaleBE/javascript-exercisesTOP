const ftoc = function(temp) {

  let computed = (temp - 32) * (5 / 9);

  return parseFloat(computed.toFixed(1)); 

};

const ctof = function(temp) {

  let computed = temp * (9 / 5) + 32;

  return parseFloat(computed.toFixed(1));

};

console.log(ftoc(32));
console.log(ctof(-18));
console.log(typeof ctof(0));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
