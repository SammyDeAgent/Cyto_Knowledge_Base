// Common datastructures

// Common Node for general purpose use
class Node {
  constructor(id, data) {
    this.id = id;
    this.data = data;
    this.parent = [];
    this.children = [];
  }

  getDetails() {
    return `
      Node ID: ${this.id}
      Node Data: ${this.data}
      Node Parent: ${this.parent.map(item => item.data)}
      Node Children: ${this.children.map(item => item.data)}
    `;
  }
}

// Common Tree data structure - Non-binary
class Tree {
  constructor(id, data) {
    let node = new Node(id, data);
    this.root = node;
  }

  find(id, node = this.root) {

    if (node.id == id){
      return node;
    }

    for (let child of node.children) {
        //if the data is found in any child node it will be returned here 
        if (this.find(id, child)) {
          return this.find(id, child);
        }
    }   
    return null;
}

  add(id, data, parentId) {

    let parent = this.find(parentId);
    let node = new Node(id, data);

    if(this.find(id)) {
      let temp = this.find(id);
      temp.parent.push(parent);
      parent.children.push(node);
      return temp;
    }
    
    if (parent) {
        parent.children.push(node);
        node.parent.push(parent);
        
        //return this node
        return node;
    }
    else {
        throw new Error(`Cannot add node: parent with data ${parentId} not found.`);
    }
  }

  // Get the largest product value of a tree node chain - Doesn't work with non-binary Tree I guess

  // getMaxChain(node = this.root) {

  //   let left;
  //   let right;
  //   let chain = [];

    
  //   if(node.children.length == 0) {
  //     return [node.data];
  //   }

  //   left = this.getMaxChain(node.children[0]);
  //   right = this.getMaxChain(node.children[1]);

  //   left.push(node.data);
  //   right.push(node.data);

  //   if(left.reduce((a, b) => {return a + b}) > right.reduce((a, b) => {return a + b})) {
  //     chain = left;
  //   }else{
  //     chain = right;
  //   }

  //   // console.log(chain.reduce((a, b) => {return a + b}), chain);

  //   return chain;
  // }

}

class  BTNode {
  constructor(id, data) {
    this.id = id;
    this.data = data;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  getDetails() {
    return `
      Node ID: ${this.id}
      Node Data: ${this.data}
      Node Parent: ${this.parent}
      Node Left: ${this.left}
      Node Right: ${this.right}
    `;
  }
}

class BinaryTree {
  constructor(id, data){
    let node = new BTNode(id, data);
    this.root = node;
  }

  find(id, node = this.root) {

    if(node.left == null || node.right == null) return;

    if (node.id == id){
      return node;
    }
    

    // for (let child of node.children) {
    //     if (this.find(id, child)) {
    //       return this.find(id, child);
    //     }
    // } 

    if(this.find(id, node.left)) return this.find(id, node.left);
    if(this.find(id, node.right)) return this.find(id, node.right) ;

    return null;
  }

  add(node, parent = this.root) {
    if(parent.left == null && node.data < parent.data) {
      parent.left = node;
      node.parent = parent;
      return node;
    }
    if(parent.right == null && node.data > parent.data) {
      parent.right = node;
      node.parent = parent;
      return node;
    }
    if(node.data < parent.data) {
      this.add(node, parent.left);
    }
    if(node.data > parent.data) {
      this.add(node, parent.right);
    }
    node.parent = parent;
    return node;
  }
}

module.exports = {Node, BTNode, Tree, BinaryTree};