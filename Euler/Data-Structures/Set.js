/*
  Array and Set are essentially the same, the only different is that set doesn't allow duplicates
*/

const {Set} = require("./DT");

const set1 = new Set();

set1.add(4);
set1.add(5);
set1.add(8);
set1.add(8);
set1.add(9);

console.log(set1.entries());