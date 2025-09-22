/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    // jewels = jewels.split('');   //just chumma
    // stones = stones.split('');    //just chumma
    // let count = 0;

    // for(let i=0;i<stones.length;i++) {
    //     // if(jewels.includes(stones[i])) count++;
    //     for(let j=0;j<jewels.length;j++) {
    //         if(stones[i]===jewels[j]) count++;
    //     }
    // }return count;

   
    let jewelsSet = new Set(jewels);
    let count = 0;

    for(let i=0;i<stones.length;i++){
        if(jewelsSet.has(stones[i])) count++;

    }return count;

};