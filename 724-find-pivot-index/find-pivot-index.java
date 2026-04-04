class Solution {
    public int pivotIndex(int[] nums) {

        int tot = 0;
        int rSum = 0;
        int lSum = 0;

        for(int i=0;i<nums.length;i++) tot+=nums[i];

        rSum = tot;//to seperately get the right sum values...

        for(int i=0;i<nums.length;i++) {

            rSum -= nums[i];

            if(rSum==lSum) return i;

            lSum += nums[i];
        }
        return -1;
    }
}