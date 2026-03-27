class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int l = 0;
        int r = 0;
        int sum = 0;
        int res = Integer.MAX_VALUE;

        for(int i=0;i<nums.length;i++){

            sum+= nums[i];

            while(sum>=target) {

                res = Math.min(res,r-l+1);
                sum -= nums[l];
                l++;
            }

            r++;
        }
        if(res==Integer.MAX_VALUE) return 0;
        return res;
        
    }
}