// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

const common = require("./common");

const limit = 1000;

let sum = BigInt(0);

for(let i = 1; i <= limit; i++) {
  sum += common.power(i,i);
}

console.log(sum);

// Last ten-digits
var bigNumber = sum.toString();
let bigLength = bigNumber.length-10;

let temp = "";

for(let i = 0; i < 10; i++){
  temp += bigNumber[bigLength];
  bigLength++;
}

console.log(temp);