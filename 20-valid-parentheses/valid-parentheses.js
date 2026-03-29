/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let stack = [];
    // const map = {'(':')','{':'}','[':']'}
    for(let i=0;i<s.length;i++) {
        let curr = s[i];

        if(curr=='(' || curr == '[' || curr == '{') stack.push(curr);

        else{
            let top = stack.pop();

        if(!top || top=='('&& curr!== ")"  ||top=='['&& curr!== "]" || top=='{'&& curr!== "}") return false;
        }
        
    }
    return stack.length===0;
    
};