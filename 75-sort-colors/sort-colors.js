/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(arr) {

    // return nums.sort();
    let low = curr = 0;
    let high = arr.length-1;

    while(curr<=high) {

        if(arr[curr]==0) {

            // let temp = arr[low];
            // arr[low] = arr[curr];
            // arr[curr] = temp;
            [arr[low],arr[curr]] = [arr[curr],arr[low]];
            low++;curr++

        }else if(arr[curr]==2) {
            
            [arr[high],arr[curr]] = [arr[curr],arr[high]];
            high--;

        }else curr++;
    } return arr;
}