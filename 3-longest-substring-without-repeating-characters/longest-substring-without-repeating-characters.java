class Solution {
    public int lengthOfLongestSubstring(String s) {

        HashSet<Character> mySet = new HashSet<>();
        int l = 0,maxSize = 0;

        for(int i=0;i<s.length();i++){

            char curr = s.charAt(i);

            while(mySet.contains(curr)){
                mySet.remove(s.charAt(l));
                l++;
            }
            mySet.add(curr);
            maxSize = Math.max(maxSize,i-l+1);
        }
        return maxSize;
    }
}