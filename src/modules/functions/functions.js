/* eslint-disable no-param-reassign */

import createNode from '../tree/node.js';
import { isLeaf, hasOneChild, getParent } from './helperFunctions.js';

// Asignment: Write a find function that accepts a value and returns the node with the given value.

// FIND
export function find(root, value) {

  // Base Case: check if the value is present in the tree or if the root already has the value
  if (root === null || value === root.data) return root;

  // Value is smaller than current root's data: go to left subtree
  if (value < root.data) return find(root.left, value);

  // Value is greater than current root's data: go to right subtree
  if (value > root.data) return find(root.right, value);

  return null;
}



// Asignment:
// Write insert and delete functions that accepts a value to insert/delete.
// You’ll have to deal with several cases for delete, such as when a node has children or not.

// INSERT
export function insert(root, value) {

  // Base case: create new node if root is empty
  if (!root) return createNode(value);

  // When a duplicate value is found, do nothing
  if (root.data === value) return root;

  // Recursively traverse through subtree
  if (value < root.data) root.left = insert(root.left, value);
  if (value > root.data) root.right = insert(root.right, value);

  return root;
}


// DELETE
export function remove(root, value) {

  // First find the node to be removed
  const node = find(root, value);

  // If value doesn't not exist in tree, return null
  if (node === null) return null;

  // If value exists, make copy of node for return
  const currentNode = node;

  // Node is leaf node
  if (isLeaf(node)) {
    const parentNode = getParent(root, node);
    console.log('parent found: ', parentNode);
    // remove link in parent (write getParent function)
    // delete node (=== null)

    return currentNode;
  }

  // Node has one child
  if (hasOneChild(node)) {

    // Get parent
    // Check if found node is left or richt child of parent
    // Check if chilf of found node is left or right child
    // Replace parent node value with found node childs value

    return currentNode;
  }

  // Node has 2 children
  // Get parent
  // Get in order successor (use inOrder function) (next lowest value in subtree)
  // Set parent link to in order succesor
  // Set corresponding children of found node to parent node

  return currentNode;
}



/* Assignment:
  Write a levelOrder function that accepts a random optional callback function as its parameter.
  levelOrder should traverse the tree in breadth-first level order and provide each node as
  an argument to the callback.
  As a result, the callback will perform an operation on each node following the order
  in which they are traversed.
  levelOrder may be implemented using either iteration or recursion (try implementing both!).
  The method should return an array of values if no callback is given as an argument.
*/

// BFS using ITERATION
export function levelOrderIteration(root, callback) {
  const result = [];
  const queue = [];

  // Set root as first item in queue
  if (root) queue.push(root);

  // As long as there are items in the queue
  while (queue.length) {

    // Get first item from queue
    const currentNode = queue.shift();

    // Store value of current node (unless there is a callback function)
    if (callback) {
      callback(currentNode);
    } else {
      result.push(currentNode.data);
    }

    // Add left and/or right child to queue
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return result;
}


// BFS using RECURSION
function levelOrderHelper(root, result, queue, callback) {

  // Base case
  if (root === null) return null;

  // Add left and/or right child to queue
  if (root.left) queue.push(root.left);
  if (root.right) queue.push(root.right);

  // Store value of current node, unless there is a callback function
  if (callback) {
    callback(root);
  } else {
    result.push(root.data);
  }

  // As long as there are items in the queue
  if (queue.length) {

    // Get first item from queue
    const currentNode = queue.shift();

    // Recursively visit each node in queue
    levelOrderHelper(currentNode, result, queue, callback);
  }

  return result;
}

export function levelOrderRecursion(root, callback) {
  const result = [];
  const queue = [];

  return levelOrderHelper(root, result, queue, callback);
}



/* Assignment:
  Write inOrder, preOrder, and postOrder functions that also accept a random optional
  callback as a parameter. Each of these functions should traverse the tree in their
  respective depth-first order and yield each node to the provided callback.
  The functions should return an array of values if no callback is given as an argument.
*/


// PRE ORDER TRAVERSAL

function preOrderHelper(root, result, callback) {

  if (root === null) return null;

  // First store value of root node, unless there is a callback function
  if (callback) {
    callback(root);
  } else {
    result.push(root.data);
  }

  // Then traverse through left subtree
  preOrderHelper(root.left, result, callback);

  // At last, traverse through right subtree
  preOrderHelper(root.right, result, callback);

  return result;
}

export function preOrder(root, callback) {
  const result = [];

  return preOrderHelper(root, result, callback);
}


// IN ORDER TRAVERSAL

function inOrderHelper(root, result, callback) {

  if (root === null) return null;

  // First traverse through left subtree
  inOrderHelper(root.left, result, callback);

  // Then store value of root node, unless there is a callback function
  if (callback) {
    callback(root);
  } else {
    result.push(root.data);
  }

  // At last, traverse through right subtree
  inOrderHelper(root.right, result, callback);

  return result;
}

export function inOrder(root, callback) {
  const result = [];

  return inOrderHelper(root, result, callback);
}


// POST ORDER TRAVERSAL

function postOrderHelper(root, result, callback) {

  if (root === null) return null;

  // First traverse through left subtree
  postOrderHelper(root.left, result, callback);

  // Then traverse through right subtree
  postOrderHelper(root.right, result, callback);

  // At last, store value of root node, unless there is a callback function
  if (callback) {
    callback(root);
  } else {
    result.push(root.data);
  }

  return result;
}

export function postOrder(root, callback) {
  const result = [];

  return postOrderHelper(root, result, callback);
}



/* Assignment:
  Write a height function that accepts a node and returns its height.
  Height is defined as the number of edges in the longest path from a given node to a leaf node.
*/

// height() {

// }



/* Assignment:
  Write a depth function that accepts a node and returns its depth.
  Depth is defined as the number of edges in the path from a given node to the tree’s root node.
*/

// depth(node) {

// }



/* Assignment:
  Write an isBalanced function that checks if the tree is balanced.
  A balanced tree is one where the difference between heights of the left subtree and
  the right subtree of every node is not more than 1.
*/

// isBalanced() {

// }



/* Assignment:
  Write a rebalance function that rebalances an unbalanced tree.
  Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
*/

// rebalance() {
