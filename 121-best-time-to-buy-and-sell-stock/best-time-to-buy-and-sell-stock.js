var maxProfit = function(arr) {
    let min = arr[0];
    let maxP = 0;
    for(let i=1;i<arr.length;i++) {
        if(arr[i]<min){
            min = arr[i];
        }
        let currProfit = arr[i]-min;
        if(currProfit> maxP) {
            maxP=currProfit;
        }
        
    }return maxP;
};