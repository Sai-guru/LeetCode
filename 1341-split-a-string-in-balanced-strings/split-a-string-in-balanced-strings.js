/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {

    let l = r = 0;
    let c = 0;

    for(let i=0;i<s.length;i++) {
        if(s[i]=='R') r++;
        else l++;

        if(l==r) {
            c++;
            l = r = 0;
        }
    }
    return c;
    
};