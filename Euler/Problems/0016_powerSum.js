// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

const power = 1000;

const result = BigInt(Math.pow(2, power)).toString();

let sum = 0;

for(let i = 0; i < result.length; i++) {
  sum += parseInt(result[i]);
}

console.log(sum);