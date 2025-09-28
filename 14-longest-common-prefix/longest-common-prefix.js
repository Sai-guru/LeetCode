/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(str) {

    if(str.length<=0) return "";
    str.sort();
    console.log(str)
    let res = "";
    let first = str[0];
    let last = str[str.length-1];
    let i=0;
    while(i<first.length && i<last.length) {
        if(first[i]==last[i]) {
            res+=first[i];
            i++
        }else {
            break;
        }
    }return res;
};