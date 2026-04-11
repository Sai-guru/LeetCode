/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

    const readyStr = (str) => {
        // approach 1 - using stack
        // let stack = [];

        // for(let i=0;i<str.length;i++) {
        //     let curr = str[i];

        //     if(curr!='#') stack.push(curr);
        //     else if(stack.length>0) stack.pop();
        // }
        // return stack.join('');


        //approach 2 - using Map (cool and easy)...
        const map = new Map();
        let orderKey = 0;

        for(let i=0;i<str.length;i++) {
            let curr = str[i];

            if(curr!='#'){

                map.set(orderKey,curr);
                orderKey++;
            }else {
                orderKey--;
                map.delete(orderKey)
            }
        }

        return [...map.values()].join('');

    }
    //writing the func onyl 1 time bcos both need same working ...jsut giving the ip params and ending ...
    return readyStr(s) === readyStr(t);
};