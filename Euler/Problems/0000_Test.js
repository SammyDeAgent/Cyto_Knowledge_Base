const common = require("./common");
const {BTNode, BinaryTree} = require("./DT");

// var num = 585;

// // console.log(num);
// // console.log(num.toString(2));

// console.log(common.factorial(0));

var root = new BinaryTree(`0-0`, 57);

root.add(new BTNode(`1-0`, 67));

root.add(new BTNode(`5-1`, 68));

root.add(new BTNode(`3-1`, 31));

root.add(new BTNode(`7-1`, 56));

console.log(root.find(`5-1`).getDetails());