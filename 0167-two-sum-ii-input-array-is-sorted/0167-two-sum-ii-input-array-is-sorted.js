/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let l = 0;
    let r= nums.length-1;
    let sum = 0;

   while(l<r) {
    let sum = nums[l]+nums[r];

    if(sum==target) return [l+1,r+1];
    else if(sum<target) l++;
    else r--;
   }
   return [-1,-1];
    
};