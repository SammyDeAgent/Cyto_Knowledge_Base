// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

let m = 2;
let sum  = 0;

let a, b, c;

var arr = triples();

console.log(`${arr.reduce((a,b) => {return a*b;})}`)

function triples() {
  while(true) {
    for(let n = 1; n < m; n++) {
      a = Math.pow(m,2) - Math.pow(n,2); 
      b = 2*m*n;
      c = Math.pow(m,2) + Math.pow(n,2); 
      sum = a + b + c;
      if(sum == 1000) {
        return [a,b,c];
      }
    }
    m++;
  }
}
