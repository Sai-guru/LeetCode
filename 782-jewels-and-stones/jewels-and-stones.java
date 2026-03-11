class Solution {
    public int numJewelsInStones(String jewels, String stones) {

        Set<Character> jSet = new HashSet<>();

        char[] stonesArr = stones.toCharArray();

        for(int i=0;i<jewels.length();i++) {
            jSet.add(jewels.charAt(i));

        }

        int c = 0;
        for(int i=0;i<stonesArr.length;i++) {

            if(jSet.contains(stonesArr[i])) c++;
        }

        return c;
        
    }
}