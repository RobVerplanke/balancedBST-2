import {
  find, levelOrderIteration, levelOrderRecursion, inOrder, preOrder, postOrder,
} from './modules/functions/functions.js';
import Tree from './modules/tree/bst.js';
import getNumbers from './modules/data/generateNumbers.js';
import prettyPrint from './modules/pretty-print/prettyPrint.js';


// Desired amount of nodes in the tree
const amount = 15;

// Value to search for with search function
const searchValue = 68;

// List of unique random numbers (< 100)
const randomNumbersList = getNumbers(amount);

// Convert sorted array to balanced BST
const bst = new Tree(randomNumbersList);

// Visualize the tree
console.log('Visualization of tree:\n');
prettyPrint(bst.root);
console.log('\n--------------------------------\n');



// FIND function test
console.log('SEARCH\nSearching for node ', searchValue, '...\n');

const foundNode = find(searchValue, bst.root);
if (foundNode === null) {
  console.log(`Node ${searchValue} not found!\n`);
} else {
  console.log(`Found node ${searchValue}:`, foundNode, '\n');
}
console.log('--------------------------------\n');



// LEVELORDER function test

// Using ITERATION with a callback function
console.log('LEVEL ORDER traversal with ITERATION\nWith callback function');
const callbackA = (node) => { console.log(`\ncallback for: ${node.data}`); };
levelOrderIteration(bst.root, callbackA);
console.log('Callbacks executed\n');

// Using ITERATION without a callback function
console.log('LEVEL ORDER traversal with ITERATION\nWithout callback function');
const iterationResult = levelOrderIteration(bst.root);
console.log('Array of values:', '\n', iterationResult, '\n');
console.log('--------------------------------\n');

// Using RECURSION with a callback function
console.log('LEVEL ORDER traversal with RECURSION\nWith callback function');
const callbackB = (node) => { console.log(`\ncallback for: ${node.data}`); };
const recursionResult = levelOrderRecursion(bst.root, callbackB);
console.log('Callbacks executed\n', recursionResult, '\n');

// Using RECURSION without a callback function
console.log('LEVEL ORDER traversal with RECURSION\nWithout callback function');
const recursionWithoutCallbackResult = levelOrderRecursion(bst.root);
console.log('Array of values:', '\n', recursionWithoutCallbackResult, '\n');
console.log('--------------------------------\n');



// IN ORDER function test

// Traverse "in order" through the tree, without a callback function
console.log('IN ORDER traversal\nWithout callback function');
const inOrderResult = inOrder(bst.root);
console.log('Array of values:', '\n', inOrderResult, '\n');

// Traverse "in order" through the tree, with a callback function
console.log('IN ORDER traversal\nWith callback function');
const callbackC = (node) => { console.log(`\ncallback for: ${node.data}`); };
const inOrderWithCallbackResult = inOrder(bst.root, callbackC);
console.log('Callbacks executed\n', inOrderWithCallbackResult, '\n');
console.log('--------------------------------\n');



// PRE ORDER function test

// Traverse "pre order" through the tree, without a callback function
console.log('PRE ORDER traversal\nWithout callback function');
const preOrderResult = preOrder(bst.root);
console.log('Array of values:', '\n', preOrderResult, '\n');

// Traverse "pre order" through the tree, with a callback function
console.log('PRE ORDER traversal\nWith callback function');
const callbackD = (node) => { console.log(`\ncallback for: ${node.data}`); };
const preOrderWithCallbackResult = preOrder(bst.root, callbackD);
console.log('Callbacks executed\n', preOrderWithCallbackResult, '\n');
console.log('--------------------------------\n');



// POST ORDER function test

// Traverse "pre order" through the tree, without a callback function
console.log('post ORDER traversal\nWithout callback function');
const postOrderResult = postOrder(bst.root);
console.log('Array of values:', '\n', postOrderResult, '\n');

// Traverse "post order" through the tree, with a callback function
console.log('post ORDER traversal\nWith callback function');
const callbackE = (node) => { console.log(`\ncallback for: ${node.data}`); };
const postOrderWithCallbackResult = postOrder(bst.root, callbackE);
console.log('Callbacks executed\n', postOrderWithCallbackResult, '\n');
console.log('--------------------------------\n');
