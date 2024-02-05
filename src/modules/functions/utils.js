/* eslint-disable no-param-reassign */

// Node has NO children (true/false)
export function isLeaf(node) {
  return node.left === null && node.right === null;
}


// Node has ONE child (true/false)
export function hasOneChild(node) {
  return (node.left === null && node.right !== null)
         || (node.left !== null && node.right === null);
}

// Node has TWO children (true/false)
export function hasTwoChildren(node) {
  return node.left !== null && node.right !== null;
}

// Get parent of node
export function getParent(root, node) {

  // Base Case
  if (root === null || root === node) return null;

  // Node is in left or right child
  if (root.left === node || root.right === node) return root;

  // Search value is smaller than current root's data: go to left subtree
  if (node.data < root.data) return getParent(root.left, node);

  // Search value is greater than current root's data: go to right subtree
  if (node.data > root.data) return getParent(root.right, node);

  return null;
}

// Get next lowest value in (right) subtree
export function getInorderSuc(node) {
  while (node.left !== null) node = node.left;
  return node;
}

// Get max value of the two
export function getMax(leftHalf, rightHalf) {
  return Math.max(leftHalf, rightHalf);
}

