// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const limit = 2000000;

// Sieve of Eratosthenes

let arr = [];

for(let i = 2; i < limit; i++) {
  arr.push(i);
}

let i = 0;

while(i < arr.length) {
  if(Math.pow(arr[i],2) > arr[arr.length-1]) break;
  arr = arr.filter(item => item == arr[i] || item % arr[i] != 0)
  i++;
}

console.log(arr.reduce((a,b)=>{return a+b}));