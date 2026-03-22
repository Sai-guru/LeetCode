/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // const map = new Map();

    // for(let i=0;i<strs.length;i++) {
    //     let curr = strs[i].split('').sort().join('');

    //     if(!map.has(curr)) map.set(curr,[]);

    //     map.get(curr).push(strs[i]);
    // }

    // // console.log(map);

    // // console.log([...map.values()]);

    // return [...map.values()];

    // // or return Array.from(map.values());

    const map = new Map();

    for(let i=0;i<strs.length;i++) {

        let freqArr = Array(26).fill(0);
        let currS = strs[i]
        for(let j=0;j<currS.length;j++) {

            let index = currS[j].charCodeAt() - 'a'.charCodeAt()
            freqArr[index]++;
        }
        let key = "";
        for(let k=0;k<26;k++) {
            key+= String.fromCharCode(k)+freqArr[k];

        }
        if(!map.has(key)) map.set(key,[currS]);
        else map.get(key).push(currS);
    }
      
      return [...map.values()];

    

    

    
};