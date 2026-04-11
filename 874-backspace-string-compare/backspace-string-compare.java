class Solution {
    public boolean backspaceCompare(String s, String t) {
        return readyStr(s).equals(readyStr(t));
    }

    private String readyStr(String str) {
        // approach 1 - using stack
        /*
        Stack<Character> stack = new Stack<>();

        for (int i=0; i<str.length();i++) {
            char curr = str.charAt(i);

            if (curr!='#') stack.push(curr);
            else if (!stack.isEmpty()) stack.pop();
        }
        // return stack.join('');
        return stack.toString();
        */

        //approach 2 - using Map (cool and easy)...
        Map<Integer, Character> map = new HashMap<>();
        int orderKey = 0;

        for (int i=0; i<str.length();i++) {
            char curr = str.charAt(i);

            if (curr!='#') {
                map.put(orderKey,curr);
                orderKey++;
            } else if (orderKey > 0) {
                orderKey--;
                map.remove(orderKey);
            }
        }

        // return [...map.values()].join('');
        return new ArrayList<>(map.values()).toString();
    }
}
