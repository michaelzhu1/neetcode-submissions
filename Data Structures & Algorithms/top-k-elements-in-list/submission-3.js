class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // first build the frequency map to track the freq of each elements
        const freqMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (freqMap.has(nums[i])) {
                freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
            } else {
                freqMap.set(nums[i], 1);
            }
        }
        // then build a array of arrays that maps element count to array index
        const countArr = Array.from({length:nums.length + 1}, () => []);
        for (const [num, count] of freqMap) {
            countArr[count].push(num);
        }
        
        // lastly loop through the count array from right to left to find the highest
        // k count of elements in terms of frequency, and push them into an array
        const result = [];
        for (let i = countArr.length - 1; i > 0; i--) {
            for (const num of countArr[i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
