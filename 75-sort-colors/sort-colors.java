class Solution {
    public void sortColors(int[] arr) {
        int low = 0;
        int curr = 0;
        int high = arr.length-1;

        while(curr<=high) {

            if(arr[curr]== 0) {
                int temp = arr[curr];
                arr[curr] = arr[low];
                arr[low] = temp;
                
                low++;curr++;

            }else if(arr[curr]==2) {
                int temp = arr[curr];
                arr[curr] = arr[high];
                arr[high] = temp;
                 
                 high--;
                
            }else curr++;
        }
        
    }
}