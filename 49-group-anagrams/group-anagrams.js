/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    const map = new Map();

    for(let i=0;i<strs.length;i++) {
        let curr = strs[i].split('').sort().join('');

        if(!map.has(curr)) map.set(curr,[]);

        map.get(curr).push(strs[i]);
    }

    // console.log(map);

    // console.log([...map.values()]);

    return [...map.values()];

    // or return Array.from(map.values());

    

    

    
};