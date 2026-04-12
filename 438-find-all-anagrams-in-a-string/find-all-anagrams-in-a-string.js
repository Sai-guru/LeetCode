/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];
    if (s.length < p.length) return result;

    const targetMap = new Map();
    for (let char of p) targetMap.set(char, (targetMap.get(char) || 0) + 1);
    
    const windowMap = new Map();
    let left = right = 0;
    // Track how many unique chars reached the desired freq
    let matches = 0; 

    while (right < s.length) {
        const charR = s[right];
        // 1. Expand the window by adding the right char
        if (targetMap.has(charR)) {
            windowMap.set(charR, (windowMap.get(charR) || 0) + 1);
            if (windowMap.get(charR) === targetMap.get(charR)) {
                matches++;
            }
        }

        // 2. Shrink the window if it exceeds the length of p
        if (right-left + 1 > p.length) {
            const charL = s[left];
            if (targetMap.has(charL)) {
                if (windowMap.get(charL) === targetMap.get(charL)) matches--;
                
                windowMap.set(charL, windowMap.get(charL) - 1);
            }
            left++;
        }

        // 3. If matches equals the no.of.chars in p, we gotcha
        if (matches === targetMap.size) result.push(left);
        right++;

    }return result;
};
