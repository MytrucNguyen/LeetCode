public class Solution {
    public int Reverse(int x)
    {
        int result = 0;
        while (x!=0)
        {
            int temp = result * 10 + x % 10;
            if ((temp - x % 10) / 10 != result) return 0;

            result = temp;
            x /= 10;
        }

        return result;
    }
}