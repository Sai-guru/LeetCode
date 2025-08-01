/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(arr) {
    let n = arr.length;
    for(let i=0;i<Math.floor(n/2);i++) {
        let temp = arr[i];
        arr[i]=arr[n-(i+1)];
        arr[n-(i+1)] = temp;
    }
    return arr;
};

// var reverseString = function(arr){
//     return arr.reverse()
// }