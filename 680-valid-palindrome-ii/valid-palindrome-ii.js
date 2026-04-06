/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i=0;
    let j = s.length-1;

//helper guy ..
    const isPalind = (i,j)=> {
        while(i<j) {

            if(s[i]!==s[j]) return false;
            i++;j--;
        }
        return true;
    } 

    //main 
    while(i<j) {
        if(s[i]!==s[j]) return isPalind(i+1,j) || isPalind(i,j-1);
        i++;j--;
    }
    return true;



    
};