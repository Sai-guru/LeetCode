class Solution {
    public int maxProfit(int[] prices) {

        int currMin = prices[0];
        int maxP = 0,currP = 0;

        for(int i=0;i<prices.length;i++){

            if(prices[i] <currMin) currMin = prices[i];
            currP = prices[i] - currMin;

            if(currP>maxP) maxP = currP;
            
        }

        return maxP;
        
    }
}