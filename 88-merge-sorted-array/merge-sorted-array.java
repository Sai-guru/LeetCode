class Solution {
    public void merge(int[] arr1, int m, int[] arr2, int n) {

         int p1 = m-1;
         int p2 = n-1;
         
        for(int i=(m+n)-1;i>=0;i--) {
         
         if(p2<0) break;

            if(p1>=0 && arr1[p1]>arr2[p2]) {
                arr1[i]= arr1[p1];
                p1--;
            }else {
                arr1[i]=arr2[p2];
                p2--;
            }


        }
        
    }
}