class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a, b) => a[0] - b[0])
        const result = [intervals[0]];
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] <= result[result.length - 1][1]) {
                result[result.length - 1][1] = Math.max(intervals[i][1], result[result.length - 1][1]);
            } else {
                result.push(intervals[i])
            }
        }
        return result;
    }
}
