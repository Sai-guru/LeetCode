/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];
    const map = { '(':')','[':']','{':'}' };

   for(let i =0;i<s.length;i++){
    let symbol = s[i];
        if(symbol == '(' || symbol== '[' || symbol == '{') {
            stack.push(symbol);
        }else{
            if(stack.length == 0 || symbol !== map[stack.pop()]) return false;
        }
    }
    return stack.length == 0;
    
};