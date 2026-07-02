class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let left = 0;
        let right = 0;
        let minLen = Infinity;
        let currSum = nums[0];
        while (right < nums.length) {
            if (currSum >= target) {
                minLen = Math.min(minLen, right - left+1);
                currSum -= nums[left];
                left++;
            } else {
                if (right + 1 < nums.length) {
                    right++;
                    currSum += nums[right];
                } else {
                    break;
                }
            }
        }
        return minLen === Infinity ? 0 : minLen;
    }
}
