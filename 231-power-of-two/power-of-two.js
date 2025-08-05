/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==1) return true;
    if(n<=0 || n%2!==0) return false;

     let x = Math.log2(n);
     return Number.isInteger(x);
     
    // if(2**x == n) return true;
    if(Math.pow(2,x)==n) return true;
    
};