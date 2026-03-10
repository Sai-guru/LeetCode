/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(arr, x) {

    let res = [];

    for(let i=0;i<arr.length;i++) {

        let singleWord = arr[i];

        for(let j=0;j<singleWord.length;j++)

        if(singleWord[j]==x) {
            res.push(i);
            break;
        }
    }
    return res;
    
};