/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let r = l = 0;
    let count = 0;
    
    for(let i=0;i<s.length;i++){
        if(s[i]=='R') r++;
        else l++;

        if(l==r){
            count++;
            l = r = 0;
        }   
    }return count;

};