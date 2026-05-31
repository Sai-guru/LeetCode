class Solution {
    public int maxProduct(int[] nums) {

        int cProd =1,maxProd = Integer.MIN_VALUE;

        for(int num : nums) {

            cProd*=num;
            maxProd = Math.max(cProd,maxProd);

            if(cProd==0) cProd=1;
        }
        cProd = 1;

         for(int i=nums.length-1;i>=0;i--) {

            cProd*=nums[i];
            maxProd = Math.max(cProd,maxProd);

            if(cProd==0) cProd=1;
        }

        return maxProd;
        
    }
}