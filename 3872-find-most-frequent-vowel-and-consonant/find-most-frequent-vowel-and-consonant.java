class Solution {
    public int maxFreqSum(String s) {

        int maxV = 0,maxC = 0;
        Map<Character,Integer> map = new HashMap<>();

        for(int i=0;i<s.length();i++) {
            char x = s.charAt(i);
            
            if(map.containsKey(x)) map.put(x,map.get(x)+1);
            else map.put(x,1);
            
        }

        // Set<Character> vowelSet = new HashSet<>(Arrays.asList('a', 'e', 'i', 'o', 'u'));
        String vowels = "aeiou";

        for(char x : map.keySet()) {
            
            if(vowels.indexOf(x)!=-1) maxV = Math.max(maxV,map.get(x));
            else maxC = Math.max(maxC,map.get(x));
        }

        return maxV+maxC;     
    }
}