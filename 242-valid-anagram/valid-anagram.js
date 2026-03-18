/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length!==t.length) return false;

    let sMap = {};
    let tMap = {}

    for(let i=0;i<s.length;i++) {

        if(!sMap[s[i]]) sMap[s[i]]=1;
        else sMap[s[i]]++;

        if(!tMap[t[i]]) tMap[t[i]]=1;
        else tMap[t[i]]++
    }

    let keyArr = Object.keys(sMap);
    for(let i=0;i<keyArr.length;i++) {

        if(sMap[keyArr[i]]!==tMap[keyArr[i]]) return false;
    }
    return true;


    
};