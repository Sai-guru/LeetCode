/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length!==t.length) return false;
    let res =  true;

    const sArr = [...s];
    sArr.sort();
    const tArr = [...t];
    tArr.sort();

    for(let i=0;i<sArr.length;i++) {
        if(sArr[i]!==tArr[i]) {
            res = false;
            return res;
        }
    } return res;

};


    