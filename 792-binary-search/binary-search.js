/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, tar) {
    let l = 0;
    let r =arr.length-1;

    while(l<=r) {
        // while(r>=l) {
        let mid = Math.floor((l+r)/2);
        if(arr[mid]===tar) return mid;
        if(tar > arr[mid]) l=mid+1;
        else r=mid-1;
    }return -1;
};