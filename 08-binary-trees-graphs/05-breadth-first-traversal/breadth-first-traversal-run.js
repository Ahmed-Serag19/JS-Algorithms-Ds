<<<<<<< HEAD
const { Node, breadthFirstTraversal } = require('./breadth-first-traversal');

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f

const root = new Node('a');
const nodeB = new Node('b');
const nodeC = new Node('c');
const nodeD = new Node('d');
const nodeE = new Node('e');
const nodeF = new Node('f');

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;

const result = breadthFirstTraversal(root);

console.log(result);
=======
const { Node, breadthFirstTraversal } = require('./breadth-first-traversal');

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f

const root = new Node('a');
const nodeB = new Node('b');
const nodeC = new Node('c');
const nodeD = new Node('d');
const nodeE = new Node('e');
const nodeF = new Node('f');

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;

const result = breadthFirstTraversal(root);

console.log(result);
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
