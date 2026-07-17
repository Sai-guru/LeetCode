class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {

        Map<String,List<String>> map = new HashMap<>();

        for(int i=0;i<strs.length;i++){

            char[] chArr = strs[i].toCharArray();
            Arrays.sort(chArr);

            String myStr = new String(chArr);

            if(!map.containsKey(myStr)) map.put(myStr, new ArrayList<>());
            map.get(myStr).add(strs[i]);
        } 
        return new ArrayList<>(map.values());
        
    }
}