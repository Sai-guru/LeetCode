/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (arr)=> {
    n =arr.length;
    if(n<=1) return arr;
    const mid = Math.floor(n/2);
    let left = sortArray(arr.slice(0,mid));
    let right = sortArray(arr.slice(mid));

    return merge(left,right);

}
const merge=(arr1,arr2)=> {
     let arr = [];
    let p1 = arr1.length-1;
    let p2 = arr2.length-1;
    for(let i=(arr1.length+arr2.length)-1 ; i>=0;i--) {
        if(p1>=0 && (p2<0 || arr1[p1]>arr2[p2])) {
            arr[i] = arr1[p1];
            p1--;
        }else {
            arr[i] = arr2[p2];
            p2--;
        }
    }return arr;
}