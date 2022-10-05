// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let i = 1;
const cleanCount = 20;

function check(i, n) {
  for(let j = 1; j <= n; j++) {
    if(i % j != 0) return false;
  }
  return true;
}

while(true) {
  if(check(i, cleanCount)) break;
  i++;
}

console.log(i);