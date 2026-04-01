class Solution {
    public int[] twoSum(int[] nums, int target) {


        HashMap<Integer,Integer> map = new HashMap<>();
        int comp = 0;
        
        for(int i=0;i<nums.length;i++) {
            comp = target - nums[i];

            if(map.containsKey(comp)) return new int[] {map.get(comp),i};

            map.put(nums[i],i);
            

            
        }
        
        return new int[]{-1, -1};





        
        // int sum = 0;
        // for(int i=0;i<nums.length;i++) {

        //     for(int j=i+1;j<nums.length;j++) {
                 
        //             sum = nums[i]+nums[j];

        //             if(sum==target) return new int[] {i,j};
        //     }

        // }
        // return new int[]{-1, -1};


        
    }
}