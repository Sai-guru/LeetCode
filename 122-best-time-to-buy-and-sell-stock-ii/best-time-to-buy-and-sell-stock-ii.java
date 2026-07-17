class Solution {
    public int maxProfit(int[] prices) {

        int totProf = 0;

        for(int i=0;i<prices.length-1;i++){
            int currBuy = prices[i];
            int nextSell = prices[i+1];

            if(nextSell>currBuy) totProf+= nextSell-currBuy;

        }
        return totProf;
        
    }
}