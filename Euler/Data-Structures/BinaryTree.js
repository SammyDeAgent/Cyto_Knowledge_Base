const {TNode, BinaryTree} = require("./TREE");

const tree1 = new BinaryTree();

const arr = [4, 10, 3, 5, 1];

for(element of arr) {
  tree1.insert(element);
}

tree1.displayTree();