import getNumbers from './modules/data-generator/generate-numbers.js';
import Tree, { find, levelOrderIteration } from './modules/bst.js';
import prettyPrint from './prettyPrint.js';

// The desired amount of nodes in the tree
const AMOUNT = 20;
const SEARCHVALUE = 68;

// Convert a sorted array of random numbers (<100) to a balanced Binary Search Tree
const bst = new Tree(getNumbers(AMOUNT));

// Visualize the tree
prettyPrint(bst.root);

if (find(SEARCHVALUE, bst.root) === null) {
  console.log(`\nNode ${SEARCHVALUE} not found!`);
} else {
  console.log(`\nFound node ${SEARCHVALUE}: ${find(SEARCHVALUE, bst.root)}`);
}

console.log(`\nLevel order: ${levelOrderIteration(bst.root)}`);

