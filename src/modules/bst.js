import createNode from './node.js';

function buildTree(arr) {

  // Base case
  if (arr.length === 0) return null;

  // Find mid point
  const mid = Math.floor(arr.length / 2);

  // Create a root node
  const root = createNode(arr[mid]);

  // Create left and right half
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid + 1);

  // Recursive call
  root.left = buildTree(leftHalf);
  root.right = buildTree(rightHalf);

  return root;
}

export default class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }

  printTree() {
    return console.log(this.root);
  }
}
