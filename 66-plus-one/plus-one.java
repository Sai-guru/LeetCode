
import java.math.BigInteger;
class Solution {
    public int[] plusOne(int[] digits) {

        String x = "";

        for(int i=0;i<digits.length;i++) x+=digits[i];
        

        BigInteger res = new BigInteger(x);
        res = res.add(BigInteger.ONE);

        System.out.println(res);

        return res.toString().chars().map(Character :: getNumericValue).toArray();


        
    }
}