/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    str = s.toLowerCase().split('').filter((ch) => /[a-z0-9]/.test(ch));

    let revStr  = [...str].reverse().join(''); 

    return str.join('') == revStr;
}; 