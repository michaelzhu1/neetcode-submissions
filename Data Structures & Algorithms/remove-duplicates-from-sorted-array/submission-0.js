class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 0;
        let len = nums.length;
        while (i < len) {
            console.log(i)
            console.log(nums[i])
            console.log(nums[i+1])
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
