/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {

    let l = maxC = 0;
    let zCount = 0;

    for(let i=0;i<nums.length;i++){

        if(nums[i]==0) zCount++;

        while(zCount>k){
            if(nums[l]==0) zCount--;
            l++
        }
         // l-r+1 is window size
        maxC = Math.max(maxC,i-l+1);
    }
    return maxC;
    
};