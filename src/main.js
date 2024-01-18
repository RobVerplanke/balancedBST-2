import getNumbers from './modules/data-generator/generate-numbers.js';
import Tree from './modules/bst.js';
import prettyPrint from './prettyPrint.js';

// The desired amount of nodes in the tree
const AMOUNT = 20;

// Convert a sorted array of random numbers (<100) to a balanced Binary Search Tree
const bst = new Tree(getNumbers(AMOUNT));

// Visualize the tree
prettyPrint(bst.root);

console.log(bst.find(4));
