class Solution {
    public int longestOnes(int[] nums, int k) {

        int maxC = 0,l = 0,r=0, zCount = 0;

        while(r<nums.length){

            if(nums[r]==0) zCount++;

            while(zCount>k){

                if(nums[l]==0) zCount--;
                l++;
            }
            // l-r+1 is window size
            maxC = Math.max(maxC,r-l+1);
            r++;
        }

        return maxC;

        
    }
}