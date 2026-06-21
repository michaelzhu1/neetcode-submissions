class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let currMax = -Infinity;
        let globalMax = -Infinity;
        for (let i = 0; i < nums.length; i++) {
            if (currMax + nums[i] < nums[i]) {
                // reset currMax 
                currMax = nums[i];
            } else {
                currMax += nums[i];
            }
            if (currMax > globalMax) {
                globalMax = currMax;
            }
        }
        return globalMax;
    }
}
