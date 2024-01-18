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

  // Write insert and delete functions that accepts a value to insert/delete.
  // You’ll have to deal with several cases for delete, such as when a node has children or not.

  // insert(value) {

  // }

  // delete(value) {

  // }


  // Write a find function that accepts a value and returns the node with the given value.

  find(value, root = this.root) {

    // Base Case: check if the value is present in the tree or if the root already has the value.
    if (root === null || value === root.data) return root;

    // Value is smaller than current root's data: iterate through left subtree
    if (value < root.data) return this.find(value, root.left);

    // Value is greater than current root's data: iterate through right subtree
    if (value > root.data) return this.find(value, root.right);

    return null;
  }


  // Write a levelOrder function that accepts a random optional callback function
  // as its parameter. levelOrder should traverse the tree in breadth-first level
  // order and provide each node as an argument to the callback.
  // As a result, the callback will perform an operation on each node following the order
  // in which they are traversed.
  // levelOrder may be implemented using either iteration or recursion
  // (try implementing both!).
  // The method should return an array of values if no callback is given as an argument.
  // Tip: You will want to use an array acting as a queue to keep track of all the
  // child nodes that you have yet to traverse and to add new ones to the list

  // levelOrder(callback) {

  // }


  // Write inOrder, preOrder, and postOrder functions that also accept a random optional
  // callback as a parameter. Each of these functions should traverse the tree in their
  // respective depth-first order and yield each node to the provided callback.
  // The functions should return an array of values if no callback is given as an argument.

  // inOrder() {

  // }

  // preOrder() {

  // }

  // postOrder() {

  // }


  // Write a height function that accepts a node and returns its height.
  // Height is defined as the number of edges in the longest path from a given node
  // to a leaf node.

  // height() {

  // }


  // Write a depth function that accepts a node and returns its depth.
  // Depth is defined as the number of edges in the path from a given node to the tree’s root node.

  // depth() {

  // }


  // Write an isBalanced function that checks if the tree is balanced.
  // A balanced tree is one where the difference between heights of the left subtree and
  // the right subtree of every node is not more than 1.

  // isBalanced() {

  // }


  // Write a rebalance function that rebalances an unbalanced tree.
  // Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.

  // rebalance() {

  // }

}
