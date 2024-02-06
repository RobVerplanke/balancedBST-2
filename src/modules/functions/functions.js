/* eslint-disable no-param-reassign */
import createNode from '../tree/node.js';
import Tree from '../tree/bst.js';
import {
  isLeaf, hasOneChild, getParent, getInorderSuc, hasTwoChildren, getMax,
} from './utils.js';

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

// REMOVE
export function remove(root, value) {

  // Find node to be removed
  const node = find(root, value);

  // Node doesn't exist
  if (node === null) return null;

  // Node is a leaf node
  if (isLeaf(node)) {
    const parentNode = getParent(root, node);

    // delete left or right connection from parent
    if (parentNode !== null) {
      if (parentNode.left === node) parentNode.left = null;
      if (parentNode.right === node) parentNode.right = null;
    }
    console.log('REMOVED leaf node\n');

    return node;
  }

  // Node has one child
  if (hasOneChild(node)) {

    // Get parent
    const parentNode = getParent(root, node);

    // Node is root of BST
    if (parentNode === null) return null;

    // Check parent, node is left or right child
    if (parentNode.left === node) {
      // Check node, child of node is left or right child
      if (node.left !== null) {
        // Replace parent's value with node's child value
        parentNode.left = node.left;
      } else {
        parentNode.left = node.right;
      }
    } else if (parentNode.right === node) {
      if (node.left !== null) {
        parentNode.right = node.left;
      } else {
        parentNode.right = node.right;
      }
    }

    console.log('REMOVED parent of 1 node\n');

    return node;
  }

  // Node has 2 children
  if (hasTwoChildren(node)) {

    // Set in order successor of right subtree as new value
    const successor = getInorderSuc(node.right);
    node.data = successor.data;

    // Recursive call: remove successor node
    remove(node.right, successor.data);

    console.log('REMOVED parent of 2 nodes\n');

    return node;
  }

  return node;
}

// LEVEL ORDER with ITERATION
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

// LEVEL ORDER with RECURSION
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

// HEIGHT
export function getHeight(root) {

  // Base case: end of (sub)tree is reached, subtract from total
  if (root === null) return -1;

  // Recursively traverse through tree
  const leftHalf = getHeight(root.left);
  const rightHalf = getHeight(root.right);

  // Nodes are visited
  return getMax(leftHalf, rightHalf) + 1;
}

// DEPTH
export function getDepth(root, node) {

  // Base cases: end of tree is reached or node is found in children
  if (root === null) return 0;
  if (root.left === node || root.right === node) return 1;

  // Recursively traverse through tree
  let leftHalf = getDepth(root.left, node);
  let rightHalf = getDepth(root.right, node);

  // Node is found, add level to path
  if (leftHalf) leftHalf++;
  if (rightHalf) rightHalf++;

  return getMax(leftHalf, rightHalf);
}

// IS BALANCED
export function isBalanced(root) {

  // Base case: end of (sub)tree is reached
  if (root === null) return 0;

  // Recursively traverse through tree
  const leftHalf = isBalanced(root.left);

  // Subtree is inbalanced
  if (leftHalf === -1) return -1;

  const rightHalf = isBalanced(root.right);
  if (rightHalf === -1) return -1;

  // Node has inbalanced subtrees
  if (Math.abs(leftHalf - rightHalf) > 1) return -1;

  // Node has balanced subtrees
  return getMax(leftHalf, rightHalf) + 1;
}

// REBALANCE
export function rebalance(root) {

  // Create sorted array from unbalanced tree
  const sortedArray = [...inOrder(root)];

  // Create new bst
  return new Tree(sortedArray);
}
