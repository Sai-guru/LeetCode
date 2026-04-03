/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {

    let currSum = maxSum = 0;
    const map = new Map();

    for(let i=0;i<nums.length;i++) {

        //Add curr element to map

        map.set(nums[i],(map.get(nums[i]) || 0) + 1);
        currSum+=nums[i];

         //if window size exceeds k, then remove the leftmost element

          if(i>=k) {
            let outNum = nums[i - k]
            currSum -= outNum;
            map.set(outNum, map.get(outNum)-1);

          if(map.get(outNum) == 0) map.delete(outNum);
        }

        // map is exactly size k and all elements are distinct

        if (i>=k-1 && map.size == k) maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};