var Set = function() {
    var set = Object.create(setPrototype);
    set._storage = {};
    return set;
}