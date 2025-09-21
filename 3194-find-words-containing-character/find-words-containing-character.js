/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {

    let res = [];
    for(let i=0;i<words.length;i++){
        // if(words[i].includes(x))  res.push(i);
         let singleWord = words[i];
        for(let j=0;j<singleWord.length;j++) {
            if(singleWord[j] === x) {
                res.push(i);
                break
            }
        }
           
        
    }return res;
    
};