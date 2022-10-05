// Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

// It can be verified that the sum of the numbers on the diagonals is 101.

// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

// Spiral of size 3 is 9
// Spiral of size 5 is 25
// Thus limit = size squared
const size = 1001;
const limit = Math.pow(size,2); 

let spiralStep = 1;
let spiralGap = 1;
let spiralVertex = 0;

let diagonals = [];

for(let i = 1; i <= limit; i++) {
  if(i == 1) {
    diagonals.push(i);
    continue;
  }
  if(spiralStep > spiralGap) {
    spiralStep = 1;
    diagonals.push(i);
    spiralVertex++;
    continue;
  }
  if(spiralVertex == 4) {
    spiralGap += 2;
    spiralVertex = 0;
    spiralStep++;
    continue;
  }
  spiralStep++;
}

console.log(diagonals.reduce((a,b)=>{return a+b}));