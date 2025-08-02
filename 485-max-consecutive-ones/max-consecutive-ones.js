/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(a) {
    let currCount =0;
    let maxCount = 0;
    for(let i=0;i<a.length;i++){
        if(a[i]===1) {
           currCount++;
        }
        else {
            if(currCount >  maxCount) {
                maxCount = currCount;
            }
            currCount = 0;
        }
    }
     if (currCount > maxCount) {
        maxCount = currCount;
    }
return maxCount;
    
};