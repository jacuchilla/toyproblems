/* A tree is made up of a set of nodes connected by edges. A Tree is a widely used data structure 
that simulates a hierarchical tree structure, with a root value and subtrees of children with a 
parent node. A tree data structure can be defined recursively as a collection of nodes (starting 
at a root node), where each node is a data structure consisting of a value, together with a list 
of references to nodes (the children), with the constraints that no reference is duplicated, and 
none points to the root node. */ 

var Tree = function(value) {
    var newTree = {};
    newTree.value = value;

    newTree.children = [];
    _.extend(newTree, treeMethods);

    return newTree;
}

