import java.util.Stack;

class Solution {
    public String removeDuplicates(String s) {
        if (s.length() == 1) return s;

        Stack<Character> stack = new Stack<>();

        for (char curr : s.toCharArray()) {
            if (stack.isEmpty() || stack.peek() != curr) stack.push(curr);
            else stack.pop();
            
        }

    
        char[] resArray = new char[stack.size()];
        for (int i = stack.size() - 1; i >= 0; i--) {
            resArray[i] = stack.pop();
        }

        return new String(resArray);
    }
}
