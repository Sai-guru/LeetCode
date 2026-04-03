class Solution {
    public long maximumSubarraySum(int[] nums, int k) {
        long currSum = 0,maxSum = 0;
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            
            // Add current element to map and sum
            map.put(nums[i],map.getOrDefault(nums[i], 0) + 1);
            currSum += nums[i];

            // If window size exceeds k, remove the leftmost element
            if (i>=k) {
                int outNum = nums[i - k];
                currSum -= outNum;
                map.put(outNum, map.get(outNum)-1);
                if(map.get(outNum) == 0) map.remove(outNum);
            }

            // If map size is exactly k, all elements are distinct
            if (i>= k-1 && map.size()==k) maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;
    }
}