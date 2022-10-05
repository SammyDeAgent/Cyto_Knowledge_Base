// Demonstration of Linked List Data-structure

const {LinkedList, LLNode} = require("./DT");

const LL1 = new LinkedList(new LLNode(`0-1`,57));

LL1.insert(new LLNode(`0-2`, 66));
LL1.insert(new LLNode(`0-3`, 65));

console.log(LL1.getList());