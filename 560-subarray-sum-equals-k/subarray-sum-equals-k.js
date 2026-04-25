/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    let res = 0;
    const map = new Map();
    map.set(0,1);

    let preSum = 0, cnt = 0;
        for (let num of nums) {
            preSum += num;
            if(map.has(preSum-k)) cnt += map.get(preSum - k);
            
            map.set(preSum, (map.get(preSum) || 0) + 1);
        }
        return cnt;

};