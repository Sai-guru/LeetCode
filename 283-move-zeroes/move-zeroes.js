/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(a) {
    let x = 0;
    for(let i=0;i<a.length;i++) {
        if(a[i]!==0){
            a[x] = a[i];
            x++
        }
    }
    //fill all left-overs with zeroes
    for( let i=x;i<a.length;i++) {
        a[i] = 0;
    }
    return a;
};