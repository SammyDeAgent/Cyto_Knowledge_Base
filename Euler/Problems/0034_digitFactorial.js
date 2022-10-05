// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: As 1! = 1 and 2! = 2 are not sums they are not included.

const common = require("./common");


// Since max one-digit fac is 9
// 10^(d-1) <= n < 10^d, where d is the number of digit, lets say that max digit is 9, thus max sum of a fac digit is 9! x d
// 10^(d-1) <= 9!d < 10^d
// (d-1)log(10) <= log(d) + log(9) < d log(10)
// d - 1 <= log(d) + log(9) < d
// d - log(d) <= 6.56 + 1 < d - log(d) + 1 , max of floor 6
// d - log(6) <= 6.56 < d - log(6) + 1
// d <= 6.56 + log(6) < d + 1
// d <= 7.33 < d + 1
// At most 7 digits, and will fail for any d > 7
// Getting the upperbound to 9999999 -> 7x9! = 2540160 (new upperbound)
// Read more online for tidying up the upperbound to 1499999

const upperBound = 1499999; 

const lowerBound = 10;

let curious = [];

for(let i = lowerBound; i <= upperBound; i++) {
  let digitFactorial = BigInt(0);
  for(let j = 0; j < i.toString().length; j++) {
    digitFactorial += common.factorial(parseInt(i.toString()[j]));
  }
  if(parseInt(digitFactorial.toString()) == i) curious.push(i);
}

console.log(curious.reduce((a, b) => {return a + b}));