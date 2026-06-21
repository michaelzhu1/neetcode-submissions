class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        // while (nums[0] > nums[nums.length - 1]) {
        //     const first: number = nums.shift();
        //     nums.push(first)
        // }
        // return nums[0];
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            if (nums[l] <= nums[r]) {
                return nums[l]
            }
            let m = Math.floor((l + r)/2)
            if (nums[m] >= nums[l]) {
                l = m + 1;
            } else {
                r = m;
            }
    }
    }
}
