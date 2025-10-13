/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(arr) {
    let stack = [];
    let n = arr.length;
    let res = Array(n).fill(0);

    stack.push(n-1);

    for(let i=n-2;i>=0;i--) {
        while(stack.length) {
            let top = stack[stack.length-1];
            if(arr[i]<arr[top]){
                res[i] = top - i;
                break;
            }else stack.pop();
        }stack.push(i);
    } 
    return res;



};