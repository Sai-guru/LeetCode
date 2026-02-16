class Solution {
    public int fib(int n) {
        // if(n==0) return 0;
        // if(n==1) return 1;
         
         if(n<=1) return n;
        // return fib(n-1)+fib(n-2);

        int f = 0 ;
        int s = 1;

        for(int i=2;i<=n;i++) {
            int temp = f+s;
            f = s;
            s = temp;
        }

        return s;
        
    }
}