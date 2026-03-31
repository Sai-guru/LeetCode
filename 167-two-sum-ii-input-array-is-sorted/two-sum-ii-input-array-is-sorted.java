class Solution {
    public int[] twoSum(int[] arr, int target) {
        int l = 0;
        int sum = 0;
        int r = arr.length-1;

        while(l<r) {

            sum = arr[l]+arr[r];

            if(sum>target) r--;
            else if(sum==target) return new int[] {l+1,r+1};
            else l++;
        }
        return new int[] {-1,-1};
        
    }
}