class Solution {
    public boolean containsDuplicate(int[] nums) {

        Map<Integer,Integer> map = new HashMap<>();

        for(int curr : nums) map.put(curr,map.getOrDefault(curr,0)+1);

        for(int val : map.values()){
            if(val>1) return true;
        }
        return false;
        


        
    }
}