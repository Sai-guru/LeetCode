class Solution {
    public int search(int[] arr, int tar) {

        int l = 0;
        int r = arr.length-1;

        while(l<=r) {

            int mid = ((l+r)/2);

            if(arr[mid]==tar) return mid;

            if(tar>arr[mid]) l=mid+1;
            else r=mid-1;
        }
        return -1;

        
    }
}