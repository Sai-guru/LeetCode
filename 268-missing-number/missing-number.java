class Solution {
    public int missingNumber(int[] nums) {

        int len = nums.length;
        int summF = ((len*(len+1))/2);
        int tot = 0;

        for(int i=0;i<len;i++) {
             tot += nums[i];
        }

        int res = summF - tot;
        return res;






        
    }
}