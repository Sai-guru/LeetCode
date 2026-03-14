/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {

    s = s.split('')

    for(let i=0;i<s.length;i+=2*k) {
       //1st loop for jump to 2k elements
        let n = k;
        let mid = Math.floor(n/2);

    // 2nd loop for swap processing with starting k elements accessed by x...
        for(let j=0;j<mid;j++){   //just add i,we know this logic by default...

            let temp = s[i+j];
            s[i+j] = s[i+n-(j+1)];
            s[i+n-(j+1)] = temp;

        }
    }
    return s.join('');

     
    
};