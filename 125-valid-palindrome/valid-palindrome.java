class Solution {
    public boolean isPalindrome(String s) {

        s = s.toLowerCase();
        String filteredStr = "";

        for(int i=0;i<s.length();i++) {
            char c = s.charAt(i);
            if((c>='a' && c<='z') || (c>='0' && c<='9'))  filteredStr += c;
        }

        String reversedStr = "";
        for(int i = filteredStr.length()-1;i>=0;i--) {
            reversedStr += filteredStr.charAt(i);

        }

        return filteredStr.equals(reversedStr);
        
    }
}