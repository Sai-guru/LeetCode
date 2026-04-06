/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s=s.toLowerCase();
    let filteredStr = revStr = '';

    for(let i=0;i<s.length;i++) {

       if(s[i]>='a' && s[i]<='z' || s[i]>='0' && s[i]<='9') {
        filteredStr +=s[i];
        revStr = s[i]+revStr;

       }

    }
    return filteredStr === revStr;

    
};