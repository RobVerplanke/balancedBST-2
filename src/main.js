import getNumbers from './modules/randomNr.js';
import Tree from './modules/bst.js';

// Amount of random numbers
const AMOUNT = 20;

// Build a balanced Binary Search Tree with a sorted array of random numbers < 100
const bst = new Tree(getNumbers(AMOUNT));

bst.printTree();
