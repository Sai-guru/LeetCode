/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length!==t.length) return false;

    const sArr = [...s];
    sArr.sort();
    console.log(sArr);
    const tArr = [...t];
    tArr.sort();
     console.log(tArr);

    for(let i=0;i<sArr.length;i++) {
        if(sArr[i]!==tArr[i]) return false;
        
    } return true;


};


    