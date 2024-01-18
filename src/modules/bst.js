/* eslint-disable no-else-return */
import createNode from './node.js';

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

  getRoot() {
    return this.root;
  }

  // insert(value) {

  // }

  // delete(value) {

  // }

  // Write a find function that accepts a value and returns the node with the given value.
  find(value, root = this.root) {

    // Base Case: check if the value is present in the tree or if the root has the value.
    if (root === null || value === root.data) {
      return root;
    }

    // Recursive call
    // Value is smaller than current root's data: iterate through left subtree
    if (value < root.data) {
      return this.find(value, root.left);
    } else {
    // Value is greater than current root's data: iterate through right subtree
      return this.find(value, root.right);
    }
  }

  // levelOrder() {

  // }

  // inOrder() {

  // }

  // preOrder() {

  // }

  // postOrder() {

  // }

  // height() {

  // }

  // depth() {

  // }

  // isBalanced() {

  // }

  // rebalance() {

  // }

}
