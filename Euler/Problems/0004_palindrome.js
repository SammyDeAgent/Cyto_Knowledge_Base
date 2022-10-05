// palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const common = require("./common");

const n = 999;

let i = n;

var product;
var biggestProduct = 0;
var equation;

palindroneCheck();

function palindroneCheck(){
  for(i; i >= 0; i--) {
    for(j = n; j >= 0; j--) {
      product = i * j;
      stringProduct = product.toString();
      if(stringProduct === common.reverseString(stringProduct)) {
        if(product > biggestProduct) {
          biggestProduct = product;
          equation = `${i} x ${j} = ${product}`;
        }
      }
    }
  }

  console.log(biggestProduct);
  console.log(equation)
}

