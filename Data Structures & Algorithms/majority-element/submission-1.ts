class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const halfFreq = Math.floor(nums.length/2)
        const freqMap = new Map<number, number>()
        for (let i = 0; i < nums.length; i++) {
            if (freqMap.has(nums[i])) {
                freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
                if (freqMap.get(nums[i]) > halfFreq) {
                    return nums[i]
                }
            } else {
                freqMap.set(nums[i], 1)
            }
        }
        return nums[0];
    }
}
