class Solution {
    public int smallestRangeI(int[] nums, int k) {
        int min = nums[0];
        int max = nums[0];
        int res = 0;
        
        for (int x : nums) {
            min = Math.min(min, x);
            max = Math.max(max, x);
        }
        
        res = (max-k)-(min+k);
        
        return Math.max(0, res);
    }
}
