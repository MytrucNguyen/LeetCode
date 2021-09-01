class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
    # Option one
        a = int(str(x)[::-1]) if x > 0 else -int(str(abs(x))[::-1])

        if(a < -2147483648 or a > 2147483647):
            return 0
        else:
            return ascii
    # # Option two
    #     b = (-1 if x < 0 else 1) * int(str(x)[::-1].replace("-",""))
    #     if b > pow(2,31) - 1 or b < -1 * pow(2, 31):
    #         return 0
    #     return b

    # # Option three
    #     max_integer = 2 ** 31 - 1
    #     min_integer = - 2 ** 31

    #     sign = 1 if x >= 0 else -1
    #     x = abs(x)
    #     reverse = 0
        
    #     while x > 0:
    #         reverse = reverse * 10 + x % 10
    #         x = x // 10
            
    #     res = sign * reverse
    #     return res if res >= min_integer and res <= max_integer else 0