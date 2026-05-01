/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    let res = [];
    const map = new Map();
    let l = r = 0;
    let winS = p.length;

    for(let x of p) map.set(x,(map.get(x) || 0)+1);

    while(r<s.length){
        let rCurr = s[r];

        if(map.has(rCurr) && map.get(rCurr)>0) winS--;

        map.set(rCurr,(map.get(rCurr)||0)-1);
        r++;


        //success checkk
        if(winS==0) res.push(l);

        // after pushing , relieve the left most element/..

        if(r-l == p.length){
            leftCurr = s[l];

            if(map.has(leftCurr) && map.get(leftCurr)>=0) winS++;

            map.set(leftCurr,(map.get(leftCurr)||0)+1);
            l++;
        }
    }
    return res;
};












