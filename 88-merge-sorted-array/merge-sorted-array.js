/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(n1, m, n2, n) {
    
//     n1Copy = [...n1];
//     let p1 =0 , p2 = 0;
//     for(i=0;i<(m+n);i++) {
//         if(p2>=n || (p1<m && n1Copy[p1]<n2[p2])){
//             n1[i] = n1Copy[p1];
//             p1++;
//         }else {
//             n1[i] = n2[p2];
//             p2++
//         }
//     }return n1;
// };
var merge = function(n1, m, n2, n) {
    let p1 = m-1,p2 =n-1;
    for(let i=(m+n)-1;i>=0;i--) {
        if(p2<0) break;
        if(p1>=0 && n1[p1]>n2[p2]){
            n1[i]= n1[p1];
            p1--;
        }else {
            n1[i]=n2[p2];
            p2--;
        }
    }return n1;
}