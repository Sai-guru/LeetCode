/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    // let stack = [];
    // let res = '';
    //  for(let i=0;i<s.length;i++){
        
    //     if(s[i] == '(') {
    //         if(stack.length>0) res+=s[i];
    //         stack.push(s[i]);
            
    //      }else{
    //         stack.pop(); 
    //         if(stack.length>0) res+=s[i];       
    //     } 
         
    //  } return res;
    let lvl = 0;
    let res = '';
    for(let i=0;i<s.length;i++) {
        if(s[i]=='(') {
            if(lvl>0) res+=s[i];
            lvl++;
        }else {
            lvl--;
             if(lvl>0) res+=s[i];
        }
    } return res;
}; 