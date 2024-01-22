import { createNode } from './index.js';

function buildTree(arr) {

  // Base case
  if (arr.length === 0) return null;

  // Find mid-point of the given array
  const mid = Math.floor(arr.length / 2);

  // Create a root node
  const root = createNode(arr[mid]);

  // Recursive call
  root.left = buildTree(arr.slice(0, mid));
  root.right = buildTree(arr.slice(mid + 1));

  return root;
}

export default class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }
}
