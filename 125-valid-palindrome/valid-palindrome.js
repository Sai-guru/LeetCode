/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     
    s = s.toLowerCase();
    let filteredStr = "";
    let revStr = "";

    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)) {
            filteredStr += s[i];
            // rev = s[i]+ rev;  single line instead of 2nd for loop
        }
    }
    // let revStr =  [...filteredStr].reverse().join('');
    for(let i= filteredStr.length-1;i>=0;i--){
        revStr += filteredStr[i];
    }
    return filteredStr === revStr;
}; 