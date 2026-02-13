class Solution {
    public int reverse(int x) {

        long rev = 0;

       int n = Math.abs(x);

        while(n>0) {
            int rem = n%10;
            rev =  rev*10 + rem;
            n = (n/10);
        }
        if (rev > Integer.MAX_VALUE) return 0;
        return (x<0) ? (int)-rev : (int)rev;

        
    }
}