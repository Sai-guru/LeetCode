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

    // let x =0 ;
    // if(str.length<=0) return "";
    // while(x<str[0].length){
    //     let ch = str[0][x];
    //     for(let i=1;i<str.length;i++) {
    //         if(ch != str[i][x] || x == str[i].length) {
    //              return str[0].slice(0,x);
    //         }
    //     }
    //     x++;
    // }return str[0];
};