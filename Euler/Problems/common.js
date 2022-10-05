// Commonly used mathematically functions and utilities

// Factorial of a number
exports.factorial = (num) => {
  let sum = BigInt(num);
  if(num == 0) return 1n;
  sum *= this.factorial(num - 1);
  return sum;
}

// Check wether the number is a prime or not, returns boolean
exports.isPrime = (num) => {
  let primeCount = 0;
  for(let i = 0; i <= num; i++) {
    if(num % i == 0) primeCount += 1;
    if(primeCount > 2) return false;
  }
  return (primeCount == 2) ? true : false;
}

// Reverse a string
exports.reverseString = (string) => {
  return string.split("").reverse().join("");
}

// Finding the prime factors for a number
exports.primeFactor = (num) => {
  let factors = []
  for(let i = 2; i <= num; i++) {
    if(module.exports.isPrime(i)) {
      if(num % i == 0) {
        factors.push(i);
        num /= i;
      }else continue;
    }
  }
  return factors;
} 

// Finds the factors for a number 
exports.Factor = (num) => {
  let factors = [];
  for(let i = 1; i <= num; i++) factors.push(i);
  return factors.filter(item => num % item == 0);
}

// Proper-divisor of factors
exports.properDivisor = (num) => {
  let proper = module.exports.Factor(num);
  proper.pop();
  return proper;
}

// Finds the total number of divisor of a given number
exports.divisorFunction = (num) => {
  let init_num = num;
  let factors = 1;
  let power = 0;
  for(let i = 2; i * i <= init_num; ++i) {
    power = 0;
    while(num % i == 0) {
      num /= i;
      ++power;
    }
    factors *= (power + 1);
  }
  if(num > 1) {
    factors *= 2;
  }
  return factors
}

// Exponential in Big Int
exports.power = (num, exp) => {
  let powered = BigInt(num);
  for(let i = 1; i < exp; i++) {
    powered *= BigInt(num);
  }
  return powered;
}