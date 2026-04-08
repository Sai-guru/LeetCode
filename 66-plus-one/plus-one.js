/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(arr) {

    let res = 0;
    let str = '';

    // res = Number(arr.join(''));   //-- if not using the below for loop...then uncomment..
    for(let i=0;i<arr.length;i++) {
        str+=arr[i];
    }
    res = BigInt(str); //-- if not using for loop ,then comment this ...
    res++;

   return res.toString().split('').map(Number);


    
};