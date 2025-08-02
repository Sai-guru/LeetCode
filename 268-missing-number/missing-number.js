/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(a) {
     let sumOfGivenArray = 0;
     let n = a.length;
    for(let i=0;i<n;i++) {
        sumOfGivenArray+= a[i];
    }
    let mySum = n*(n+1)/2;
    let res = mySum - sumOfGivenArray;
    return res;
    
};