/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     
    s = s.toLowerCase();
    let filteredStr = "";

    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)) {
            filteredStr += s[i];
        }
    }

    console.log(filteredStr)
    // let revStr =  [...filteredStr].reverse().join('');
    let revStr = "";
    for(let i= filteredStr.length-1;i>=0;i--){
        revStr += filteredStr[i];
    }
    console.log(revStr);
    return filteredStr === revStr;
















    // s = s.toLowerCase().split('');
    // let main = [];

    // for(let i=0;i<s.length;i++){

    //     if(s[i].match(/[a-z0-9]/i)) main.push(s[i]);
        
    // }
    // let revStr =  [...main].reverse().join('');
    
    // return main.join('') === revStr;
}; 