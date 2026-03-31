class Solution {
    public String removeOuterParentheses(String s) {

        String res = "";
        int c = 0;

        for(int i=0;i<s.length();i++){

            char curr = s.charAt(i);

            if(s.charAt(i)=='(') {

                if(c>0) res+=curr;
                c++;

            }else {
                c--;
                if(c>0) res+=curr;
            }
        }
        return res;
        
    }
}