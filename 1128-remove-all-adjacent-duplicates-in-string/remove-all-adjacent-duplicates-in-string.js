/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {

    if(s.length==1) return s;

    let stack = [];

    for(let curr of s){

        if(stack.length==0 || stack[stack.length-1]!==curr) stack.push(curr);

        else stack.pop();

    }

   
    return stack.join('');
    
};