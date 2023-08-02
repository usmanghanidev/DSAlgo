class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    // create new node

    const node = new Node(value);
    // if root node empty
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          // for left
          if (!currentNode.left) {
            currentNode.left = node;

            return this;
          }

          currentNode = currentNode.left;
        } else {
          // for right
          if (!currentNode.right) {
            currentNode.right = node;

            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    //Code here
    if (!this.root) return false;

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }

    return false;
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(traverse(tree.root));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
