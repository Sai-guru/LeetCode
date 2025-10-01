/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for(let i=0;i<strs.length;i++) {

        let sortedWord = strs[i].split('').sort().join('');

        if(map[sortedWord]){
            map[sortedWord].push(strs[i]);
            // console.log(map)
        }
        else map[sortedWord] = [strs[i]];
    }
    // let keys = Object.keys(map);
    // let res = [];

    // for(let i=0;i<keys.length;i++) {
    //     res.push(map[keys[i]]);
    // }
    // return res;
    return [...Object.values(map)];
    
};