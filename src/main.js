import { find, levelOrderIteration, levelOrderRecursion } from './modules/functions/functions.js';
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
prettyPrint(bst.root);


// FIND function test
console.log(`\nSearching for node ${searchValue}...`);

if (find(searchValue, bst.root) === null) {
  console.log(`\nNode ${searchValue} not found!`);
} else {
  console.log(`\nFound node ${searchValue}: ${find(searchValue, bst.root)}`);
}


// LEVELORDER function test

// Using ITERATION with a callback function
console.log('\n\nLevelOrder with callback function, using ITERATION:');
const callbackA = (node) => { console.log(`\ncallback for: ${node.data}`); };
levelOrderIteration(bst.root, callbackA);
console.log('\nCallback executed');


// Using ITERATION and without a callback function
console.log('\n\nLevelOrder without callback function, using ITERATION:');
console.log(`\nNo callback found. Level order: ${levelOrderIteration(bst.root)}`);


// Using RECURSION with a callback function
console.log('\n\nLevelOrder with callback function, using RECURSION:');
const callbackB = (node) => { console.log(`\ncallback for: ${node.data}`); };
console.log(levelOrderRecursion(bst.root, callbackB));
console.log('\nCallback executed');


// Using RECURSION and without a callback function
console.log('\n\nLevelOrder without callback function, using RECURSION:');
console.log(`\nNo callback found. Level order: ${levelOrderIteration(bst.root)}`);
