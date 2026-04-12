/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(n) {

    let rev = 0;
    let revCopy = n;

    while(n>0){

        let rem = n%10;
        rev = 10*rev + rem;
        n=Math.floor(n/10);
    }
    return rev===revCopy;
    
};