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
    let mapKeys = Object.keys(map);

    for(let i=0;i<mapKeys.length;i++) {
        if(vowels.includes(mapKeys[i])) maxV = Math.max(maxV,map[mapKeys[i]]);
        else maxC = Math.max(maxC,map[mapKeys[i]]);
    }return maxV+maxC;
};