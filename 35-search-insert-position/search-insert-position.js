/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let l= mid =0;
    let r = nums.length-1;

    while(l<=r){

        mid = Math.floor((l+r)/2);

        if(nums[mid]==target) return mid;
        else if(nums[mid]<target) l = mid+1;
        else r = mid-1; //only exists for iteration limit ....

    } return l;

};