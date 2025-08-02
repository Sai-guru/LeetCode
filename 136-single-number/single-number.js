/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(a) {

    // let hash = {};
    // for(let i=0;i<a.length;i++) {
    //     if(!hash[a[i]]) {
    //          hash[a[i]] = 1;
    //     } else {
    //          hash[a[i]]++;
    //     }
    // }
    // for(let i=0;i<a.length;i++) {
    //    if( hash[a[i]] == 1) {
    //     return a[i];
    //    }
    // }
    let xorIdent = 0;
    for(let i=0;i<a.length;i++) {
       xorIdent = xorIdent^a[i];
    }return xorIdent;
};