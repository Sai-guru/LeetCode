/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    let res = [] ,map = {} ,c = p.length;
    let l = r = 0;
    

    for (let i=0;i<p.length;i++){
        let curr = p[i];
        map[curr] = (map[curr] || 0)+1;
    }

    while(r<s.length){

        if(map[s[r++]]-- >0) c--;

        if(c==0) res.push(l);

        if(r-l==p.length) {
             if(map[s[l++]]++ >=0) c++;
        }
    } return res;

};
