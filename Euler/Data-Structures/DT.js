// Datastructure Files

class Node {
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }
}

class LLNode extends Node {
  constructor(id, data) {
    super(id, data);
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
    this.tail = node;
    this.size = 1;
  }

  insert(node) {
    this.size += 1;
    this.tail.next = node;
    this.tail = node;
  }

  getList(node = this.head) {
    if(node.next != null) {
      console.log(`${node.id} - ${node.data}`);
      this.getList(node.next);
    }else{
      console.log(`${node.id} - ${node.data}`);
    }
    return this.size;
  }
}

class Queue {
  constructor() {
    this.input = [];
  }

  add(element) {
    this.input.push(element);
  }

  remove() {
    return this.input.shift();
  }

  length() {
    return this.input.length;
  }

  getDetails() {
    return {
      "Queue": this.input, 
      "Size": this.input.length
    };
  }
} 

class Stack {
  constructor() {
    this.input = [];
  }

  push(element) {
    this.input.push(element);
    return this;
  }

  pop() {
    return this.input.pop();
  }

  getDetails() {
    return {
      "Stack": this.input, 
      "Size": this.input.length
    };
  }
}

class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.collisions = 0;
    this.keys = [];
  }

  hash(key) {
    let hashValue = 0;
    const stringTypeKey = `${key}${typeof key}`;

    for (let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index);
      hashValue += charCode << (index * 8);
    }

    return hashValue;
  }


  _getBucketIndex(key) {
    const hashValue = this.hash(key);
    const bucketIndex = hashValue % this.buckets.length;
    return bucketIndex;
  }

  set(key, value) {
    const {bucketIndex, entryIndex} = this._getIndexes(key);

    if(entryIndex === undefined) {
      // initialize array and save key/value
      const keyIndex = this.keys.push({content: key}) - 1; // keep track of the key index
      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
      this.buckets[bucketIndex].push({key, value, keyIndex});
      this.size++;
      // Optional: keep count of collisions
      if(this.buckets[bucketIndex].length > 1) { this.collisions++; }
    } else {
      // override existing value
      this.buckets[bucketIndex][entryIndex].value = value;
    }

    // check if a rehash is due
    if(this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {
      this.rehash(this.buckets.length * 2);
    }

    return this;
  }

  get(key) {
    const {bucketIndex, entryIndex} = this._getIndexes(key);

    if(entryIndex === undefined) {
      return;
    }

    return this.buckets[bucketIndex][entryIndex].value;
  }

  has(key) {
    return !!this.get(key);
  }

  _getIndexes(key) {
    const bucketIndex = this._getBucketIndex(key);
    const values = this.buckets[bucketIndex] || [];

    for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {
      const entry = values[entryIndex];
      if(entry.key === key) {
        return {bucketIndex, entryIndex};
      }
    }

    return {bucketIndex};
  }

  delete(key) {
    const {bucketIndex, entryIndex, keyIndex} = this._getIndexes(key);

    if(entryIndex === undefined) {
      return false;
    }

    this.buckets[bucketIndex].splice(entryIndex, 1);
    delete this.keys[keyIndex];
    this.size--;

    return true;
  }

  rehash(newCapacity) {
    const newMap = new HashMap(newCapacity);

    this.keys.forEach(key => {
      if(key) {
        newMap.set(key.content, this.get(key.content));
      }
    });

    // update bucket
    this.buckets = newMap.buckets;
    this.collisions = newMap.collisions;
    // Optional: both `keys` has the same content except that the new one doesn't have empty spaces from deletions
    this.keys = newMap.keys;
  }

  getLoadFactor() {
    return this.size / this.buckets.length;
  }
}

class Set extends HashMap {
  constructor() {
    super();
  }

  add(value) {
    this.set(value);
  }

  has(value) {
    return this.has(value);
  }

  delete(value) {
    return this.delete(value);
  }

  entries() {
    return this.keys.reduce((acc, key) => {
      if(key !== undefined) {
        acc.push(key.content);
      }
      return acc
    }, []);
  }
}

module.exports = {Node, LinkedList, LLNode, Queue, Stack, HashMap, Set};