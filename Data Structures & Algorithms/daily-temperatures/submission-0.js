class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = [];
        for (let i = 0; i < temperatures.length; i++) {
            let answered = false;
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[i] < temperatures[j]) {
                    result.push(j - i);
                    answered = true;
                    break;
                }
            }
            if (!answered) {
                result.push(0)
            }
        }
        return result;
    }
}
