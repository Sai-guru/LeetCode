class Solution {
    public boolean isIsomorphic(String s, String t) {

        if(s.length()!=t.length()) return false;

        Map<Character,Character> s2T = new HashMap<>();
        Map<Character,Character> t2S = new HashMap<>();

        for(int i=0;i<s.length();i++){

            char sChar = s.charAt(i);
            char tChar = t.charAt(i);

            if (!s2T.containsKey(sChar) && !t2S.containsKey(tChar)) {
                s2T.put(sChar, tChar);
                t2S.put(tChar, sChar);
            } 

            

            if (s2T.containsKey(sChar) != t2S.containsKey(tChar)) return false;

            else if(s2T.get(sChar)!=tChar || t2S.get(tChar)!=sChar) return false;
        }
        System.out.print(s2T);
        System.out.print(t2S);

        return true;

    }
}