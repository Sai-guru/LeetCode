/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let tot = 0;
    let lSum = rSum = 0;

    for(let i=0;i<nums.length;i++) tot+=nums[i];

    rSum = tot; //to seperately get the right sum values...

    for(let i=0;i<nums.length;i++) {

        rSum -= nums[i];

        if(rSum==lSum) return i;

        lSum+=nums[i];

    }
    return -1;
};