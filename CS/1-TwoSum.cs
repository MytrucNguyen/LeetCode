public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> index = new Dictionary<int, int>();
        for(int i = 0; i < nums.Length; i++) {
            var result = target - nums[i];
            if(index.ContainsKey(result)) {
                return new int[]{index[result], i};
            } else {
                if(!index.ContainsKey(nums[i])){
                    index.Add(nums[i], i);
                }
            }
        }
        return new int[0];
    }
}