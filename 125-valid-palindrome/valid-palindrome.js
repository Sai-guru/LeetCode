/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    //Approach 2 - better SC optimal...
    //2 pts approach

    s = s.toLowerCase();

    let i = 0;
    let j = s.length-1;

    while(i<j) {

        if(!s[i].match(/[a-z0-9]/)) i++;
        else if (!s[j].match(/[a-z0-9]/)) j--;

        else if(s[i]==s[j]) {
            i++;j--;
        }
        else return false

       
    }
    return true;





   















//Approach 1 

    //  s = s.toLowerCase();

    //filtered value 
    // let filteredStr = "";
    // let revStr = "";

    // for(let i=0;i<s.length;i++) {
        // if(s[i].match(/[a-z0-9]/i)) filteredStr += s[i];
        // if((s[i]>='a' && s[i]<='z') || (s[i]>='0' && s[i]<='9'))  {
        //     filteredStr += s[i];
        //     revStr = s[i] + revStr
        // }


    // }
    // console.log(filteredStr)

    // return filteredStr===filteredStr.split('').reverse().join('');

    // return filteredStr===revStr;

}; 