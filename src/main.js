import getNumbers from './modules/data/generate-numbers.js';
import Tree from './modules/classes/bst.js';
import prettyPrint from './modules/pretty-print/prettyPrint.js';
import { find, levelOrderIteration } from './modules/functions/functions.js';


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
if (find(searchValue, bst.root) === null) {
  console.log(`\nNode ${searchValue} not found!`);
} else {
  console.log(`\nFound node ${searchValue}: ${find(searchValue, bst.root)}`);
}


// LEVELORDER function test

// With Callback
const callback = (node) => { console.log(`\ncallback for: ${node.data}`); };
levelOrderIteration(bst.root, callback);
console.log('\nCallback executed');

// Without callback
// console.log(`\nNo callback found. Level order: ${levelOrderIteration(bst.root)}`);

