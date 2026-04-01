/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arr) {

    let res = [];
    arr.sort((a,b)=>a-b);
    let tot = 0;

    for(let i=0;i<arr.length;i++) {

        let j = i+1;
        let k = arr.length-1;

        if(i>0 && arr[i]==arr[i-1]) continue; //ignoring this and gonna next iteration directly bcos no duplicate allowed here...-1st element

        while(j<k){

            tot = arr[i]+arr[j]+arr[k];

            if(tot>0) k--;
            else if(tot<0) j++;
            else {
                res.push([arr[i],arr[j],arr[k]]);
                j++;
            
//ignoring this and gonna next iteration directly bcos no duplicate allowed here...- 2nd element
            while(arr[j]==arr[j-1] && j<k) j++;
            } //else ending..
        }
    }
    return res;
    
};