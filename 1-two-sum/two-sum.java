class Solution {
    public int[] twoSum(int[] nums, int tar) {

        Map<Integer,Integer> map = new HashMap<>();

        for(int i=0;i<nums.length;i++){
            int bal = tar - nums[i];

            if(map.containsKey(bal)) return new int[]{map.get(bal),i};

            map.put(nums[i],i);
        }
        return new int[]{-1,-1};
    }
}