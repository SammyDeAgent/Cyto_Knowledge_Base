// An irrational decimal fraction is created by concatenating the positive integers:

// 0.123456789101112131415161718192021...

// It can be seen that the 12th digit of the fractional part is 1.

// If dn represents the nth digit of the fractional part, find the value of the following expression.

// d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000

// Generate the constant

const limit = 1000000;

let constant = "";
let value = 0;

for(let i = 1; i <= limit; i++) {
  constant += i.toString();
}

value = constant[0] * constant[9] * constant[99] * constant[999] * constant[9999] * constant[99999] * constant[999999];

console.log(value);

