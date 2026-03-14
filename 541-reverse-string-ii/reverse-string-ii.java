class Solution {
    public String reverseStr(String s, int k) {

        char[] arr = s.toCharArray();

        for(int i=0;i<arr.length;i+=2*k){

            int n = Math.min(k, arr.length - i);
            int mid = n/2;


            for(int j=0;j<mid;j++){

                char temp = arr[i+j];
                arr[i+j] = arr[i+n-(j+1)];
                arr[i+n-(j+1)] = temp;

            }

        }
        return new String(arr);

        
    }
}