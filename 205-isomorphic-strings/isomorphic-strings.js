/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    if(s.length!==t.length) return false;

    let s2T = new Map();
    let t2S = new Map();

    for(let i=0;i<s.length;i++) {

        if(!s2T.has(s[i]) && !t2S.has(t[i])){
            t2S.set(t[i],s[i]);
            s2T.set(s[i],t[i]);
        }
        else if(t2S.get(t[i])!==s[i] || s2T.get(s[i])!==t[i]) return false;
    }

    return true;


    
};