/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
        let res = [[]];


    for(let i=0;i<nums.length;i++) {
        let curr = nums[i];
        resLen = res.length;

        for(let j=0;j<resLen;j++) {

            let subSet = [...res[j],curr];
            res.push(subSet);
        }
    } return res;
    
};