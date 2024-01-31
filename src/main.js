/* eslint-disable no-unused-vars */
import {
  find, levelOrderIteration, levelOrderRecursion, inOrder, preOrder, postOrder, insert, remove,
} from './modules/functions/functions.js';
import Tree from './modules/tree/bst.js';
import getNumbers from './modules/data/generateNumbers.js';
import prettyPrint from './modules/pretty-print/prettyPrint.js';


// Desired amount of nodes in the tree
const amount = 20;

// Value to search for with search function
const searchValue = 68;

// Value to insert with insert function
const insertValue = 12;

// Value to remove with remove function
const removeValue = 14;

// Sorted list of unique random numbers (< 100)
const randomNumbersList = getNumbers(amount);
// const randomNumbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


// Create BST from sorted list
const bst = new Tree(randomNumbersList);

// Visualize the tree in terminal
console.log('Visualization of tree:\n');
prettyPrint(bst.root);
console.log('\n--------------------------------\n');


// FIND function test
// console.log('\nSEARCH for node ', searchValue, '...\n');
// const foundNode = find(bst.root, searchValue);
// if (foundNode === null) {
//   console.log('\bNode', searchValue, 'not found!\n');
// } else {
//   console.log('Found node', searchValue, '\b:\n', foundNode, '\n');
// }
// console.log('--------------------------------\n');



// INSERT function test

// console.log('INSERT value', insertValue, '\n');
// insert(bst.root, insertValue);
// console.log('--------------------------------\n');
// console.log('Updated tree:\n');
// prettyPrint(bst.root);



// DELETE function test

console.log('REMOVE value', removeValue, '\n');
if (remove(bst.root, removeValue) === null) {
  console.log('Value not found!');
} else {
  console.log('Updated tree:\n');
  prettyPrint(bst.root);
  console.log('\n--------------------------------\n');
}



// // LEVELORDER function test

// // Optional callback function
// const callback = (node) => { console.log(`\ncallback for: ${node.data}`); };


// // Using ITERATION without a callback function
// console.log('\nLEVEL ORDER traversal with ITERATION\n\nWithout callback function');
// const iterationResult = levelOrderIteration(bst.root);
// console.log('Array of values:', '\n', iterationResult, '\n');

// // Using ITERATION with a callback function
// console.log('With callback function');
// levelOrderIteration(bst.root, callback);
// console.log('\nCallbacks executed\n');

// // Using RECURSION without a callback function
// console.log('\nLEVEL ORDER traversal with RECURSION\nWithout callback function');
// const recursionWithoutCallbackResult = levelOrderRecursion(bst.root);
// console.log('Array of values:', '\n', recursionWithoutCallbackResult, '\n');

// // Using RECURSION with a callback function
// console.log('With callback function');
// levelOrderRecursion(bst.root, callback);
// console.log('\nCallbacks executed\n', '\n');
// console.log('--------------------------------\n');



// // IN ORDER function test

// // Traverse "in order" through the tree, without a callback function
// console.log('IN ORDER traversal\nWithout callback function');
// const inOrderResult = inOrder(bst.root);
// console.log('Array of values:', '\n', inOrderResult, '\n');

// // Traverse "in order" through the tree, with a callback function
// console.log('With callback function');
// inOrder(bst.root, callback);
// console.log('\nCallbacks executed\n');
// console.log('--------------------------------\n');



// // PRE ORDER function test

// // Traverse "pre order" through the tree, without a callback function
// console.log('\nPRE ORDER traversal\nWithout callback function');
// const preOrderResult = preOrder(bst.root);
// console.log('Array of values:', '\n', preOrderResult, '\n');

// // Traverse "pre order" through the tree, with a callback function
// console.log('With callback function');
// preOrder(bst.root, callback);
// console.log('\nCallbacks executed\n');
// console.log('--------------------------------\n');



// // POST ORDER function test

// // Traverse "pre order" through the tree, without a callback function
// console.log('POST ORDER traversal\nWithout callback function');
// const postOrderResult = postOrder(bst.root);
// console.log('Array of values:', '\n', postOrderResult, '\n');

// // Traverse "post order" through the tree, with a callback function
// console.log('With callback function');
// postOrder(bst.root, callback);
// console.log('\nCallbacks executed\n');
// console.log('--------------------------------\n');
