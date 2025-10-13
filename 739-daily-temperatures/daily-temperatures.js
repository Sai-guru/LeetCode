/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let stack = [];
    let res = [];
    let n = temp.length;
    stack.push([temp[n-1],n-1]);
    res.push(0);

    for(let i=n-2;i>=0;i--) {
        
        while(stack.length && temp[i]>=stack[stack.length-1][0]) {
            stack.pop();
        }
        
        if(stack.length==0) res.push(0);
        else res.push(stack[stack.length-1][1]-i);
        stack.push([temp[i],i]);
        
    }
   
    return res.reverse();



};