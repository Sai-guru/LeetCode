class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        
        List<List<Integer>> res = new ArrayList<>();
        res.add(new ArrayList<>());

        for (int num : nums) {
            int currentSize = res.size();

            for (int i = 0; i < currentSize; i++) {

                List<Integer> subSet = new ArrayList<>(res.get(i));
                subSet.add(num);
                res.add(subSet);
            }
        }
        return res;
    }
}
