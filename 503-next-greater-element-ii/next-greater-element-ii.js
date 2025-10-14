/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    let n = nums.length;
    let res = [];
    
    for(let i=2*n-1;i>=0;i--) {
         let currVal = nums[i%n];
         while(stack.length && currVal>=stack[stack.length-1]) {
               stack.pop();
            }
            if(i<n) res.push(stack.length ? stack[stack.length-1] : -1);
            

            stack.push(currVal);
    }return res.reverse();
};
