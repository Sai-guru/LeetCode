class Solution {
    public boolean isAnagram(String s, String t) {
        
        if(s.length()!=t.length()) return false;

        Map<Character,Integer> sMap = new HashMap<>();
        Map<Character,Integer> tMap = new HashMap<>();

        for(int i=0;i<s.length();i++) {

            char sChar = s.charAt(i);
            char tChar = t.charAt(i);

            if(sMap.get(sChar)==null) sMap.put(sChar,1);
            else sMap.put(sChar,sMap.get(sChar)+1);

             if(tMap.get(tChar)==null) tMap.put(tChar,1);
            else tMap.put(tChar,tMap.get(tChar)+1);
        }

        Object[] keyArr = sMap.keySet().toArray();

        for(int i=0;i<keyArr.length;i++) {

            if(!sMap.get(keyArr[i]).equals(tMap.get(keyArr[i]))) return false;
        
        }

        return true;


    
    }
}