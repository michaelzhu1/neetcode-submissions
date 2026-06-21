class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = new Map<number, number>()
        for (let i = 0; i < nums.length; i++) {
            if (freqMap.has(nums[i])) {
                freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
            } else {
                freqMap.set(nums[i], 1);
            }
        }
        const count = Array.from({ length: nums.length + 1 }, () => []);
        for (const [key, value] of freqMap) {
            // console.log(key)
            // console.log(value)
            count[value].push(key) 
        }
        console.log(count)
        let i = nums.length;
        const result: number[] = []
        while (i >= 0) {
            let numArr = count[i];

            if (numArr.length > 0 && k > 0) {
                k = k - numArr.length;
                result.push(...numArr)
            }
            i--;
        }
        return result
    }
}
