type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number) {
    let x = init ;
    for (let i=0;i<nums.length;i++)  x= fn(x,nums[i]);


    return x

};