class Solution {
    public int[] twoSum(int[] nums, int target) {
        // int l = 0;
        // int sum = 0;
        // int r = arr.length-1;

        // while(l<r) {

        //     sum = arr[l]+arr[r];

        //     if(sum>target) r--;
        //     else if(sum==target) return new int[] {l+1,r+1};
        //     else l++;
        // }
        // return new int[] {-1,-1};

        int sum = 0;
       

        for(int i=0;i<nums.length;i++) {

            for(int j=i+1;j<nums.length;j++) {
                 
                    sum = nums[i]+nums[j];

                    if(sum==target) {
                       return new int[] {i+1,j+1};
                    }
            }

        }
        return new int[]{-1, -1};
        
    }
}