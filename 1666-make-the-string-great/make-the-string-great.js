/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {

    let stack = [];
   

    for(let curr of s){
        let top = stack[stack.length-1];

        if (stack.length > 0 && curr!==top && 
        curr.toUpperCase() === top.toUpperCase()) stack.pop();

        else stack.push(curr);


    }
    return stack.join('');
    
};