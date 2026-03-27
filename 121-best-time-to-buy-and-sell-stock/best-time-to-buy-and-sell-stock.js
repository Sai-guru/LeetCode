/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currMin = prices[0];
    let currP = maxP = 0;

    for(let i=0;i<prices.length;i++) {

        if(prices[i]<currMin) currMin = prices[i];

        currP = prices[i]-currMin;

        // maxP = Math.max(currP,maxP);
        if(currP > maxP) maxP = currP;

    }
    return maxP;

    
};