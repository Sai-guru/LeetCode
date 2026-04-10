class Solution {
    public int searchInsert(int[] nums, int t) {

        int l=0, mid =0;
        int r = nums.length-1;


        while(l<=r) {
            mid = (l+r)/2;

            if(nums[mid]==t) return mid;
            else if(nums[mid]<t) l=mid+1;
            else r = mid-1;
        }
        return l;
        
    }
}