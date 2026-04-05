class Solution {
    public int longestOnes(int[] nums, int k) {

        int maxC = 0,l = 0, zCount = 0;

        for(int i=0;i<nums.length;i++){

            if(nums[i]==0) zCount++;

            while(zCount>k){

                if(nums[l]==0) zCount--;
                l++;
            }
            maxC = Math.max(maxC,i-l+1);
        }

        return maxC;

        
    }
}