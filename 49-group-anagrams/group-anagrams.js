/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function(strs) {
    let map = {};
    for(let i=0;i<strs.length;i++){
        // create a key stored in an arr
        let freqArr = Array(26).fill(0);  //[0,0,0,.....26th 0];
        let currS = strs[i];
        for(j=0;j<currS.length;j++) {
            let index  = currS[j].charCodeAt() - 'a'.charCodeAt();
            freqArr[index]++;
        }
        let key = '';
        for(let i=0;i<26;i++) {
            key+= String.fromCharCode(i)+freqArr[i];
        }
        if(!map[key]) map[key] = [currS];
        else map[key].push(currS);

    }
    return [...Object.values(map)];
};