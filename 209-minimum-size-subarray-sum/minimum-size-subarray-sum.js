/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(tar, nums) {

    let l = r = 0;
    let sum = 0;
    let res = Infinity;

    for(let i=0;i<nums.length;i++){
        sum+=nums[i];

        while(sum>=tar){

            res = Math.min(res,r-l+1)
            sum = sum - nums[l];
            l++
        }
        r++;
    } 
      if(res==Infinity) return 0;
    return res;
    
};