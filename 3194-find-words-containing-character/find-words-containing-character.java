class Solution {
    public List<Integer> findWordsContaining(String[] arr, char x) {

        List<Integer> res = new ArrayList<>();

        for(int i=0;i<arr.length;i++) {
            String singleWord = arr[i];

            for(int j=0;j<singleWord.length();j++) {

                if(singleWord.charAt(j)==x) {
                    res.add(i);
                    break;
                }
            }
        }

        return res;
        
    }
}