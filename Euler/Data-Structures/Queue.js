const {Queue} = require("./DT");

const Q1 = new Queue();

Q1.add("John");
Q1.add("Viktor");
Q1.add("Sean");
Q1.add("Jonathan");

console.log(Q1.getDetails());

console.log(`Removed ${Q1.remove()} from Queue`);

console.log(Q1.getDetails());

console.log(`Removed ${Q1.remove()} from Queue`);

console.log(Q1.getDetails());