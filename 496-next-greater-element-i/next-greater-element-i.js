/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
    var nextGreaterElement = function(nums1, nums2) {

        const nge = new Map();
        let stack = [];

        for(let curr of nums2){

            while(stack.length>0 && curr >stack[stack.length-1]) {

                nge.set(stack.pop(),curr);

            }
            stack.push(curr);
        }

        return nums1.map(x=>nge.get(x)||-1);

            

        
};