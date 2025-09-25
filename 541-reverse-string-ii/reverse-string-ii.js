/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    
  s = s.split('');
  for(let x=0;x<s.length;x+=(2*k)) {
    let n = k;
    let mid =  Math.floor(n/2);

    for(let i=0;i<mid;i++) {   ///just add x , we know this logic by default...
        let temp = s[x+i];
        s[x+i] = s[x+n-(i+1)];
        s[x+n-(i+1)]= temp;
    }
  }
  return s.join('');
    
}; 