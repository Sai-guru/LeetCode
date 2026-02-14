class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {


        int currC = 0;
        int maxC = 0;

        for(int i=0;i<nums.length;i++) {
            if(nums[i]==1) currC++;
            else {
                if(currC>maxC) maxC = currC;
                currC = 0;
            }
        }

      return Math.max(currC,maxC);
        
        
    }
}