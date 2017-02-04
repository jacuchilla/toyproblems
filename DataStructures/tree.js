/* A tree is made up of a set of nodes connected by edges. A Tree is a widely used data structure 
that simulates a hierarchical tree structure, with a root value and subtrees of children with a 
parent node. A tree data structure can be defined recursively as a collection of nodes (starting 
at a root node), where each node is a data structure consisting of a value, together with a list 
of references to nodes (the children), with the constraints that no reference is duplicated, and 
none points to the root node. */ 

// First, we create a tree constructor function that will allow us to initialize
// a new Tree node.
let Tree = function(value) {
    let newTree = {};
    newTree.value = value;

    newTree.children = [];
    _.extend(newTree, treeMethods);

    return newTree;
}

let treeMethods = {};


// We first need to create a method that helps us add a child to the current Tree node.
treeMethods.addChild = function(value) {
    // First, we instantiate a new tree child
    let child = Tree(value);
    // Then, we push the new child into the current Trees children array.
    this.children.push(child);
}

// This method will allow us to see if how Tree has a specific target value
treeMethods.contains = function(target) {
    // This is our base case for the recursive call, it returns true we the tree value is equal to the target value
    if(this.value === target) {
        return true;
    }
    // This loop allows us to traverse the current Tree nodes childrens 
    for (let i = 0; i < this.children.length; i++) {
        // Here, we create a child variable that holds the current node
        let child = this.children[i];
        // We then run the contains recursive function on each child, this pops us to the top and checks whether we have the target node...whether the current node has a child/children. 
        if(child.contains(target)) {
            return true
        }
    }
    return false;
}

treeMethods.traverse = function(callback) {
    callback(this.value);

    // If the current tree doesnt have children, we simply return
    if (!this.children) {
        return ;
    }
    // Else if the tree does have children, we recurse into these children and traverse the tree
    for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        child.traverse(callback);
    } 
}



