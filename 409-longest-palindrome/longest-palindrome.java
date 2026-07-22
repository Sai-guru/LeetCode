class Solution {
    public int longestPalindrome(String s) {

        Map<Character,Integer> map = new HashMap<>();
        int res = 0;

        for(int i=0;i<s.length();i++) {
            char curr = s.charAt(i);
            map.put(curr,map.getOrDefault(curr,0)+1);
        }
        
        int oddC = 0;
        for(int curr : map.values()){
            if(curr%2==0) res+=curr;
            else {
                res = res+curr-1;
                oddC++;
            }
        }

        if(oddC>0) res++;


        return res;
    }
}