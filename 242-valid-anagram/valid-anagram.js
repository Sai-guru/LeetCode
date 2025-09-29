/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length!==t.length) return false;
    // const sArr = [...s].sort();
    // const tArr = [...t].sort();
    // for(let i=0;i<sArr.length;i++) {
    //     if(sArr[i]!==tArr[i]) return false;
    // } return true;

    let sMap = {};
    let tMap = {};
    for(let i=0;i<s.length;i++) {
        if(!sMap[s[i]]) sMap[s[i]] =1;
        else sMap[s[i]]++;

        if(!tMap[t[i]]) tMap[t[i]] =1;
        else tMap[t[i]]++;
    }

    let keys = Object.keys(sMap);
    for(let i=0;i<keys.length;i++) {

        if(sMap[keys[i]]!==tMap[keys[i]]) return false;
    }
    return true;

};


    