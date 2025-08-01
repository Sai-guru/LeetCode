/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (a) {
    let x =0;
    for(i=0;i<a.length;i++){
        if(a[i]>a[x]) {
            x+=1;
            a[x]=a[i];
        }
    }
    return x+1;

};