class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Returns new node
export default function createNode(data, left, right) {
  return new Node(data, left, right);
}