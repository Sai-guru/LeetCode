/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {

    for(let i=num.length-1;i>=0;i--){
          //slice(st,end-1) , so make as i+1 to get that curr odd element also
       if(Number(num[i])%2!==0) return num.slice(0,i+1); 
    }return "";
    
};