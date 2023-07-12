const Tree = require('./Tree');
const Node = require('./Node');

const tree = new Tree();
const node1 = new Node(50);
const node2 = new Node(25);
const node3 = new Node(75);
const node4 = new Node(10);
const node5 = new Node(5);
const node6 = new Node(90);

tree.addNode(node1);
tree.addNode(node2);
tree.addNode(node3);
tree.addNode(node4);
tree.addNode(node5);
tree.addNode(node6);

console.log(tree)