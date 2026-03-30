/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let lvl = 0;
    let res = '';
    for(let i=0;i<s.length;i++) {
        if(s[i]=='(') {
            if(lvl>0) res+=s[i];
            lvl++;
        }else {
            lvl--;
             if(lvl>0) res+=s[i];
        }
    } return res;
    
};