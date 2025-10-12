/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
    var nextGreaterElement = function(nums1, arr) {
        let ngeMap = {};
        let stack = [];
        let n = arr.length;

        stack.push(arr[n-1]);
        ngeMap[arr[n-1]] = -1;

        for(let i=n-2;i>=0;i--){
            while(stack.length && arr[i] > stack[stack.length-1]) {
                    stack.pop();
                }
                if(stack.length) ngeMap[arr[i]] = stack[stack.length-1];
                else ngeMap[arr[i]] = -1;

                stack.push(arr[i]);
            }
        //let ans = [];
        // for(let i=0;i<nums1.length;i++) {
        //     ans.push(ngeMap[nums1[i]]);
        // }return ans;
        return nums1.map((ele,_)=> ngeMap[ele]);
};