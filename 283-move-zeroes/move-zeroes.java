class Solution {
    public void moveZeroes(int[] arr) {
        
        int x = 0;

        for(int i=0;i<arr.length;i++) {

            if(arr[i]!=0) {
                arr[x] = arr[i];
                x++;

            }
        }

        for(int i=x;i<arr.length;i++) {
            arr[i]=0;
        }

    }
}