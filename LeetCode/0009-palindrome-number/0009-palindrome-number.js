/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let x_str = x.toString();
    let reversed_str = x_str.split("").reverse().join("");
    return x_str === reversed_str;
};
