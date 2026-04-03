/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

    let maxC = currC = 0;

    for(let i=0;i<nums.length;i++) {

        if(nums[i]==1) currC++;
        else {

            if(currC>maxC) maxC = currC;
            currC = 0;
        }

        
    }
    return Math.max(currC,maxC);
    
};