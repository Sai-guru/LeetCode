/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {

    let newArr = [];
    let n = nums.length;

    for(let i=0;i<n;i++){

        newArr[i]=nums[i];
        newArr[i+n]=nums[i];

    }

    return newArr;
    // return [...nums,...nums]  ---single line ...
    
};