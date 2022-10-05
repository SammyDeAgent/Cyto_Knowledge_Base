const {Node, Queue} = require("./DT");

class TNode extends Node {
  constructor(data, id = null) {
    super(id, data);
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(node = null) {
    this.root = node;
  }

  height(node = this.root) {
    if(node == null) return 0;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  insert(id, data, node = this.root) {
 
    if (node == null) {
      this.root = new TNode(id, data);
      return;
    }

    let q = new Queue();
    q.add(node);

    // Do level order traversal (breath first) until we find
    // an empty place.
    while (q.length()!=0) {
      node = q.remove();
      
      if (node.left == null) {
        node.left = new TNode(id, data);
        break;
      } else q.add(node.left);

      if (node.right == null) {
        node.right = new TNode(id, data);
        break;
      } else q.add(node.right);
    }
  }

  displayTree(node = this.root) {

    let treeLevel = new Queue();
    let temp = new Queue();
    treeLevel.add(node);
    
    let counter = 0;
    let height = this.height()-1;
    let elements = (Math.pow(2, (height + 1)) - 1);

    let layer = ``;

    while(counter <= height) {
      let removed = treeLevel.remove();
      if(temp.length() == 0) {
        layer += printSpace(elements / Math.pow(2, counter + 1), removed);
      } else {
        layer += printSpace(elements / Math.pow(2, counter), removed);
      }

      layer.padEnd(2);

      if(removed == null) {
        temp.add(null);
        temp.add(null)
      } else {
        temp.add(removed.left);
        temp.add(removed.right);
      }

      if(treeLevel.length() == 0) {
        layer += "\n\n";
        treeLevel = temp;
        temp = new Queue();
        counter++;
      }
    }
    console.log(layer);
  }
}

function printSpace(n, node) {
  let line = ``;
  for(;n>0;n--) {
    line += `\t`;
  }

  if(node == null){
    line += ` `;
  }
  else {
    data = `${node.data}`;
    line += data;
  }

  return line;
}

module.exports = {TNode, BinaryTree};