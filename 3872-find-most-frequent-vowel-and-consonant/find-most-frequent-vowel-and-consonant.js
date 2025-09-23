/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    
    let map = {};

    for(let i=0;i<s.length;i++){
        if(!map[s[i]]) map[s[i]]=1;
        else map[s[i]]++;
    }

    let maxC = maxV = 0;
    let vowels = ['a','e','i','o','u'];

    for(let i=0;i<s.length;i++) {
        if(vowels.includes(s[i])) {
            maxV = Math.max(maxV,map[s[i]]);
        }else {
            maxC = Math.max(maxC,map[s[i]]);
        } 
    }return maxV+maxC;
};