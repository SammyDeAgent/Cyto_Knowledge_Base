const {Stack} = require("./DT");

const S1 = new Stack();

S1.push("John");
S1.push("Viktor");
S1.push("Sean");
S1.push("Jonathan");

console.log(S1.getDetails());

console.log(`Removed ${S1.pop()} from Queue`);

console.log(S1.getDetails());

console.log(`Removed ${S1.pop()} from Queue`);

console.log(S1.getDetails());