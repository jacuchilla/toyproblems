// Palindrome Number (LeetCode)
// Determine whether an integer is a palindrome. Do this without extra space.

var isPalindrome = function(x) {
    let yx = x.toString()
    if (yx[0] === "-") {
      return false;
    } 
    let y = x.toString().split("").reverse().join("");
    
    if (y === yx) {
        return true;
    }
    else {
        return false;
    }
};