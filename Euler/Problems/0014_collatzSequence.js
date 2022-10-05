// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. 
// Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

const common = require("./common");

const limit = 1000000;

var largestChain = 0;
var chainArr = [];
var tempArr;

for(let i = 1; i < limit; i++) {
  tempArr = [];
  let n = i;
  while(n != 1) {
    tempArr.push(n);
    if(n % 2 == 0) {
      n /= 2;   
    } else {
      n = 3*n + 1;
    }
    if(n == 1) {
      tempArr.push(n);
      break;
    };
  }
  if(tempArr.length > largestChain) {
    largestChain = tempArr.length;
    chainArr = tempArr;
  }
}

console.log(largestChain);
console.log(chainArr);