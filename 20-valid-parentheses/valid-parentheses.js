/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const map = { '(':')','[':']','{':'}' };

    for(let i=0;i<s.length;i++){
        let currSymbol = s[i];
        if(currSymbol =='(' || currSymbol == '[' || currSymbol == '{') {
            stack.push(currSymbol);
        }else {
            if(stack.length == 0 || currSymbol !== map[stack.pop()]) return false;
        }
    }
    return stack.length == 0;
    
};