/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    let stack = [];
    let map = { '+':(a,b)=>(b+a) , '-':(a,b)=>(b-a),
               '*':(a,b)=>(b*a),'/':(a,b)=>Math.trunc(b/a) }
    
    for(let i=0;i<tokens.length;i++) {

        if(map[tokens[i]]) {
            let a = stack.pop();
            let b = stack.pop();
            let res = map[tokens[i]](a,b);
            stack.push(res);
        }else stack.push(Number(tokens[i]));
    } return Number(stack.pop());
    
};