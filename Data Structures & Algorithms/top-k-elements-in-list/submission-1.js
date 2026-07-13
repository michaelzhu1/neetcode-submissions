class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (freqMap.has(nums[i])) {
                freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
            } else {
                freqMap.set(nums[i], 1);
            }
        }
        const countArr = Array.from({length:nums.length + 1}, () => []);
        for (const [num, count] of freqMap) {
            countArr[count].push(num);
        }
        
        let i = countArr.length-1;
        const result = [];
        while (i > 0 && result.length < k) {
            if (countArr.length > 0) {
                result.push(...countArr[i]);
            }
            i--;
        }
        return result;
    }
}
