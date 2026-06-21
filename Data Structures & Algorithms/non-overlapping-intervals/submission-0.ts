class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        intervals.sort((a, b)=> a[0] - b[0])
        let count = 0,
        prevEnd = intervals[0][1];
        for (let i = 1; i < intervals.length; i++) {
            //overlapping
            if (prevEnd > intervals[i][0]) {
                count++;
                prevEnd = Math.min(intervals[i][1], prevEnd)
            } else {
                prevEnd = intervals[i][1]
            }
        }
        return count;
    }
}
