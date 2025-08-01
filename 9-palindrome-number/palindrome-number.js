/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(n) {
    let rev = 0;
    let copyOfn = n

    if(n<0) return false;

    while(n>0) {
        let rem = n%10;
        rev = (10*rev)+rem;
        n =Math.floor(n/10);
    }
    return rev===copyOfn;
    
};