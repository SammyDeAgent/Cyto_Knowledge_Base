// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

const common = require("./common");

let i = 1;
let j = 1;
const n = 10001;

while(i <= n) {
  if(common.isPrime(j)) {
    i++;
  }
  if(i > n) break;
  j++;
}

console.log(j);