class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 0;
        let len = nums.length;
        while (i < len) {
            if (nums[i] === nums[i+1]) {
                nums.splice(i+1,1);
                len--;
            } else {
                i++;
            }
        }
        return nums.length;
    }
}
