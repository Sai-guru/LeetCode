/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let res = '';
    let resLen = 0;

    
         function expand(l, r) {
        //odd length...
        // let l = r = i;
        while(l>=0 && r<s.length && s[l]==s[r]){

            if(r-l+1>=resLen){
            res = s.substring(l,r+1);
            resLen = r-l+1;

            }
        l--;r++;  //note when l=0 , doing l-- is still 0 only...
        }
}
        
        // //even length...
        // l = i;r=i+1;
        // while(l>=0 && r<s.length && s[l]==s[r]){

        //     if(r-l+1>=resLen){

        //     res = s.substring(l,r+1);
        //     resLen = r-l+1;
        //     }
        // l--;r++;
        // }

        for (let i = 0; i < s.length; i++) {
            expand(i, i);       // Odd length
        expand(i, i + 1);   // Even length
    }

    return res;
};