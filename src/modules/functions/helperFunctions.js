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


// Get parent of node
export function getParent(root, node) {

  // Base Case: root is null or root is same as the given node
  if (root === null || root === node) return null;

  // Value is present in left or right children
  if (root.left === node || root.right === node) return root;

  // Value is smaller than current root's data: go to left subtree
  if (node.data < root.data) return getParent(root.left, node);

  // Value is greater than current root's data: go to right subtree
  if (node.data > root.data) return getParent(root.right, node);

  return null;
}
