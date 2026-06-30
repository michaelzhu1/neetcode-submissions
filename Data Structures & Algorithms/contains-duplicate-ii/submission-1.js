class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let i = 0;
        const map = new Map();
        while (i < nums.length) {
            if (map.has(nums[i]) && Math.abs(i-map.get(nums[i])) <= k) {
                return true
            } 
            map.set(nums[i], i);
            i++
        }
        return false
    }
}
