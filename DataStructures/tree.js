/* A tree is made up of a set of nodes connected by edges. A Tree is a widely used data structure 
that simulates a hierarchical tree structure, with a root value and subtrees of children with a 
parent node. A tree data structure can be defined recursively as a collection of nodes (starting 
at a root node), where each node is a data structure consisting of a value, together with a list 
of references to nodes (the children), with the constraints that no reference is duplicated, and 
none points to the root node. */ 

// First, we create a tree constructor function that will allow us to initialize
// a new Tree node.
var Tree = function(value) {
    var newTree = {};
    newTree.value = value;

    newTree.children = [];
    // _.extend(newTree, treeMethods);

    console.log('newTree here', newTree)
    return newTree;
}

var treeMethods = {};

treeMethods.addChild = function(value) {
    // First, we instantiate a new tree child
    var child = Tree(value);
    // Then, we push the new child into the current Trees children array.
    this.children.push(child);

}

// console.log('hello world!')
console.log(treeMethods.addChild(4))


