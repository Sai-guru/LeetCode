/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    // s = s.trim().split(" ");
    // let res = s[s.length-1].length;

    // return res;
     
    // let n = s.length-1;
    //trim the empty spaces at the end...
    //traversing from end (bcos easy and fast)...

//     while(n>=0){
//         if(s[n]==" ") n--;
//         else break;
//     }
//    //count the length - means that after the spaces crossing we enter into the word, 
//     //for each word's index increment the count so that we can get the length of it..
//        let count = 0;
//     while(n>=0) {
//         if(s[n] != " ") {
//             count++;
//             n--;
//         }else break;
//     }
//        return count;  

               let n = s.length-1;
               let c= 0;

               while(n>=0) {
                if(s[n]!=' ') {
                    c++;
                }
                else if(c>0) {
                    
                    break;
                }n--;

               }return c;



};