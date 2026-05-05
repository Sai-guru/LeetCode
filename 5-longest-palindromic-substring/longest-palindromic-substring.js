/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = '';
    let resLen = 0;

    // The helper function using your exact expansion logic
    function expand(l, r) {
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            if (r - l + 1 > resLen) {
                res = s.substring(l, r + 1);
                resLen = r - l + 1;
            }
            l--; 
            r++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // odd length
        expand(i, i);
        
        // even length
        expand(i, i + 1);
    }

    return res;
};
