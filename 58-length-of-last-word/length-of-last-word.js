/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    // --simple 3 line 

    // s=s.trim().split(' ');
    // let x = s[s.length-1]
    // return x.length;
    s=s.toLowerCase();
    let n = s.length-1;
    let c = 0;

    while(n>=0){

        if(s[n]!=' ') c++; 
        // if(s[n]>='a' && s[n]<='z') c++;   --can also use this 
        else if(c>0) break;

        n--;
    }
    return c;


};