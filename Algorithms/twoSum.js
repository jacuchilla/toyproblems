// Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function(nums, target) {
    let results = {}
    for (let i = 0; i < nums.length; i++) {
        results[nums[i]] = i
    }
    for (key in results) {
      var indexKey = target - key
      if (indexKey in results && results[indexKey] !== results[key]) {
        return [results[key], results[indexKey]]
      }
    }
    console.log(results)
    return "none"
};

let numss = [2, 7, 11, 15]
let targets = 9
// twoSum(numss, targets)
// twoSum([3,2,4], 6) // [1,2]
twoSum([0,4,3,0], 0) // [0,3]
