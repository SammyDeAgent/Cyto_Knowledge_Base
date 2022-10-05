// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

const common = require("./common");

const lattice = 20;

// Binomial coefficient | a+b |
//                      |  a  |

function binomialCo(a, b) {
  return common.factorial(a) / (common.factorial(b)*common.factorial(a-b));
}

console.log(binomialCo(2*lattice, lattice));