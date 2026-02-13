class Solution {
    public int removeDuplicates(int[] a) {

        int x = 0;
        for(int i=0;i<a.length;i++) {
            if(a[i]>a[x]) {
                x++;
                a[x] = a[i];
            }
        }
        return x+1;
        
    }
}