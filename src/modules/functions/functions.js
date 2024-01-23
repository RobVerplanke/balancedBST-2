
// Asignment:
// Write insert and delete functions that accepts a value to insert/delete.
// You’ll have to deal with several cases for delete, such as when a node has children or not.

// insert(value) {

// }

// delete(value) {

// }



// Asignment:
// Write a find function that accepts a value and returns the node with the given value.
export function find(value, root) {

  // Base Case: check if the value is present in the tree or if the root already has the value.
  if (root === null || value === root.data) return root;

  // Value is smaller than current root's data: iterate through left subtree
  if (value < root.data) return find(value, root.left);

  // Value is greater than current root's data: iterate through right subtree
  if (value > root.data) return find(value, root.right);

  return null;
}



/* Assignment:
  Write a levelOrder function that accepts a random optional callback function as its parameter.
  levelOrder should traverse the tree in breadth-first level order and provide each node as
  an argument to the callback.
  As a result, the callback will perform an operation on each node following the order
  in which they are traversed.
  levelOrder may be implemented using either iteration or recursion (try implementing both!).
  The method should return an array of values if no callback is given as an argument.
*/

// Bfs using ITERATION
export function levelOrderIteration(root, callback) {
  const result = [];
  const queue = [];

  // Set root as first item in queue
  if (root) queue.push(root);

  // As long as there are items in the queue
  while (queue.length) {

    // Get first item from queue
    const currentNode = queue.shift();

    // Execute callback function, skip filling the result list
    if (callback !== undefined) {
      callback(currentNode);
    } else {

      // If no callback function is given, fill result list in level order
      result.push(currentNode.data);
    }

    // Push left and right node to queue
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return result;
}


// Bfs using RECURSION
function levelOrderHelper(root, result, queue, callback) {

  // Base case
  if (root === null) return;

  if (root.left) queue.push(root.left);
  if (root.right) queue.push(root.right);

  // Execute callback function, skip filling the result list
  if (callback) {
    callback(root);
  } else {

    // If no callback function is given, fill result list in level order
    result.push(root.data);
  }

  if (queue.length) {
    const currentNode = queue.shift();

    // Recursive call for each node in queue
    levelOrderHelper(currentNode, result, queue, callback);
  }
}

export function levelOrderRecursion(root, callback) {
  const result = [];
  const queue = [];

  if (root) {
    if (callback) {
      callback(root);
    } else {
      result.push(root.data);
    }

    levelOrderHelper(root, result, queue, callback);
  }

  return result;
}



/* Assignment:
  Write inOrder, preOrder, and postOrder functions that also accept a random optional
  callback as a parameter. Each of these functions should traverse the tree in their
  respective depth-first order and yield each node to the provided callback.
  The functions should return an array of values if no callback is given as an argument.
*/

// inOrder(root, callback) {

// }

// preOrder(root, callback) {

// }

// postOrder(root, callback) {

// }



/* Assignment:
  Write a height function that accepts a node and returns its height.
  Height is defined as the number of edges in the longest path from a given node to a leaf node.
*/

// height() {

// }



/* Assignment:
  Write a depth function that accepts a node and returns its depth.
  Depth is defined as the number of edges in the path from a given node to the tree’s root node.
*/

// depth(node) {

// }



/* Assignment:
  Write an isBalanced function that checks if the tree is balanced.
  A balanced tree is one where the difference between heights of the left subtree and
  the right subtree of every node is not more than 1.
*/

// isBalanced() {

// }



/* Assignment:
  Write a rebalance function that rebalances an unbalanced tree.
  Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
*/

// rebalance() {
