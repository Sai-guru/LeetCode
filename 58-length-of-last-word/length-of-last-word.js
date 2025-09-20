/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    s = s.trim().split(" ");
    let res = s[s.length-1].length;

    return res;
    
};