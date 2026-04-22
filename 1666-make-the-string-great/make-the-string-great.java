class Solution {
    public String makeGood(String s) {

        Stack<Character> stack = new Stack<>();

        for(char curr : s.toCharArray()){

            if(!stack.isEmpty() && curr!=stack.peek() && Character.toUpperCase(curr)== Character.toUpperCase(stack.peek())) stack.pop();
            
            else stack.push(curr);
        }
        char[] res = new char[stack.size()];

        for(int i=stack.size()-1 ;i>=0;i--){

            res[i] = stack.pop();
        }
        return new String(res);
    }
}