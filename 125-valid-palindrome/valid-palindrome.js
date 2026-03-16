/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();

    //filtered value 
    let filteredStr = "";
    let revStr = "";

    for(let i=0;i<s.length;i++) {
        // if(s[i].match(/[a-z0-9]/i)) filteredStr += s[i];
        if((s[i]>='a' && s[i]<='z') || (s[i]>='0' && s[i]<='9'))  {
            filteredStr += s[i];
            revStr = s[i] + revStr
        }
    }
    // console.log(filteredStr)

    return filteredStr===revStr;

}; 