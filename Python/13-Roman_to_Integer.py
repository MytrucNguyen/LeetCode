class Solution:
    def romanToInt(self, s: str) -> int:
        value = {
            "I" : 1,
            "V" : 5,
            "X" : 10,
            "L" : 50,
            "C" : 100,
            "D" : 500,
            "M" : 1000
        }
        
        sum = 0
                
        for i in range(len(s)):
            if i > 0 and value[s[i]] > value[s[i - 1]]:
                sum += value[s[i]] - 2 * value[s[i - 1]]
                print(sum)
            else:
                sum += value[s[i]]
        return sum