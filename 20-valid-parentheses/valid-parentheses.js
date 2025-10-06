/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // let stack = [];
    // const map = { '(':')','[':']','{':'}' };

    // for(let i=0;i<s.length;i++){
    //     let currSymbol = s[i];
    //     if(currSymbol =='(' || currSymbol == '[' || currSymbol == '{') {
    //         stack.push(currSymbol);
    //     }else {
    //         if(stack.length == 0 || currSymbol !== map[stack.pop()]) return false;
    //     }
    // }
    // return stack.length == 0;
    
    let stack = [];
    for(let i=0;i<s.length;i++) {
        let currSymbol = s[i];
         if(currSymbol =='(' || currSymbol == '[' || currSymbol == '{') {
            stack.push(currSymbol);
        }else {
            let top = stack.pop();
            if(!top || (top == '(' && currSymbol!== ')'|| top == '[' && currSymbol!== ']' || top == '{' && currSymbol!== '}'))return false;
        }

    }return stack.length == 0;
    
};