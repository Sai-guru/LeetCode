/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {

    let maxN = Math.max(...nums)-k;
    let minN = Math.min(...nums)+k;

    let res = maxN-minN;

    if(res<=0) return 0;
    else return res;
    
};