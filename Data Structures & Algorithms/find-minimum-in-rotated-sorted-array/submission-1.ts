class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        while (nums[0] > nums[nums.length - 1]) {
            const first: number = nums.shift();
            nums.push(first)
        }
        return nums[0];
    }
}
