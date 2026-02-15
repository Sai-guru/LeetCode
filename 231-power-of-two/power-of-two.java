class Solution {
    public boolean isPowerOfTwo(int n) {
        

        // if(n<=0) return false;

        // double power = Math.log(n)/Math.log(2.0);
        // int roundedPower = (int) Math.round(power);  

        // if(Math.pow(2,roundedPower)==n) return true;
        // else return false;

        if(n==1) return true;
        if(n<=0 || n%2!=0) return false;
         
        return isPowerOfTwo(n/2);

    }
}