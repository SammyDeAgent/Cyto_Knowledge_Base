/*
  Floyd's tortoise and hare cycle detection alogrithm aim to detect a loop within a linked node chain.
  Hare and tortoise here are pointer which moves at different speeds.
  If ever the Hare and Tortoise are on the same node, then there exists a loop.
  Else if fast pointer reaches the end point then there's no loop in the chained node.
*/

const {LinkedList, LLNode} = require("../Data-Structures/DT");

// 56 -> 41 -> 78* -> 88 -> 91*
const LL1 = new LinkedList(new LLNode("0-0", 56));
LL1.insert(new LLNode("0-1", 41));

let loopNode1 = new LLNode("0-2", 78);
let loopNode2 = new LLNode("0-5", 91);
loopNode2.next = loopNode1;

LL1.insert(loopNode1);
LL1.insert(new LLNode("0-3", 88));
LL1.insert(new LLNode("0-4", 89));
LL1.insert(loopNode2);

// LL1.getList(); // Never stops
console.log(floydCycleDetect(LL1));

// 56 -> 41 -> 78 -> 88 -> 97 -> null
const LL2 = new LinkedList(new LLNode("1-1", 56));
LL2.insert(new LLNode("1-2", 41));
LL2.insert(new LLNode("1-3", 78));
LL2.insert(new LLNode("1-4", 88));
LL2.insert(new LLNode("1-5", 97));

console.log(floydCycleDetect(LL2));

function floydCycleDetect(list) {
  let hare = list.head;
  let tortoise = list.head;
  while(hare.next != null) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if(hare.id == tortoise.id) return "Loop detected!";
  }
  return "No loop detected!";
}