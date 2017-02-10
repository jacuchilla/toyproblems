/* A graph contains a set of vertices and a set of edges. Edges are defined 
as a pair (v1,v2), where v1 and v2 are two vertices in a graph. A vertix can 
also have a weight, which is comtimes called a cost. A graph whose pairs are 
ordered is called a directed graph, or just a diagraph. When pairs are ordered
in a directed graph, an arrow is drawn from one pair to another pair. Directed 
graphs indicate the flow direction from vertex to vertex. A path is a sequence
of vertices in a graph such that all vertices in the path are connected by edges.
The length of a path is the number of edges from the first vertex in the path 
to the last vertex. A path can also consist of a vertex to itself, which is 
called a loop. Loops have a length of 0.

A cycle is a pth with at least one edge whose first and last vertices are the 
same. A simple cycle is one with no repeated edges or vertices for both directed
and undirected graphs. Paths that repeat other vertices besides the first and  
last vertices are called gerneral cycles. 
*/

var Graph = function() {
    this.nodes = {};
}

Graph.prototype.addNode = function(node) {
    this.nodes[node] = this.nodes[node] || { edges: {} };
}

Graph.prototype.contains = function(node) {
    return !!this.nodes[node];
}

Graph.prototype.removeNode = function(node) {
    if (this.contains(node)) {
        for (var targetNode in this.nodes[node]) {
            this.removeEdge(node, targetNode);
        }
        delete this.nodes[node];
    }
}

Graph.prototype.hasEdge = function(fromNode, toNode) {
    if (!this.contains(fromNode)) {
        return false;
    }
    return !!this.nodes[fromNode].edges[toNode];
} 
