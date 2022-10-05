// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const common = require("./common");
// Prime Factorization

var n = 600851475143;
var largestPrimeFactor;

for(let i = 2; i <= n; i++) {
  if(common.isPrime(i)) {
    if(n % i == 0) {
      largestPrimeFactor = i;
      n /= i;
    }else continue;
  }
}

console.log(largestPrimeFactor);