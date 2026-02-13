class Solution {
    public int removeElement(int[] a, int val) {

        int x = 0;

        for(int i=0;i<a.length;i++) {
            if(a[i]!=val) {
               a[x] = a[i];
                x++;
            }
        }
        return x;
    }
}