// Comparison operator only returns true if both variables point to the same object, that's why two objects with the same properties and values are different for JavaScript, like this:

// var a = { name: 'Joe' };
// var b = { name: 'Joe' };
// a == b;  //-> false
// Sometimes it's really useful to detect when two objects have the same values.

// Your task is to develop the deepCompare function to test if two objects have the same properties and values. Remember that an object can contain other objects. The function should also be able to correctly compare simple values, like strings and numbers (without using type cohersion, please).

// To make things simpler, it will only have to deal with simple values and objects and arrays containing strings, booleans and numbers, without taking into account regular expressiones, dates and functions.

function deepCompare(o1, o2) {
  if (o1 === o2) {
    return true
  }
  
  if (typeof o1 !== 'object' || typeof o2 !== 'object') {
    return false
  }
  
  if (Object.keys(o1).length !== Object.keys(o2).length) {
    return false;
  }
  let keys = Object.keys(o1);
  return keys.every(function(key){
    return deepCompare(o1[key], o2[key])
  })
};





