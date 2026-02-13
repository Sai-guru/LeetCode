class Solution {
    public int maxProfit(int[] a) {

        int currMin = a[0];
        int maxProf = 0;
        int currProf = 0;

        for(int i=1;i<a.length;i++) {
            if(a[i]<currMin) currMin = a[i];
        
         currProf = a[i]-currMin;
            if(currProf > maxProf) maxProf = currProf;


        }
        return maxProf;

    } 
}