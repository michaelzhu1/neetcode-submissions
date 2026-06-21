/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        const start = []
        const end = []
        for (let i = 0; i < intervals.length; i++){
            start.push(intervals[i].start)
            end.push(intervals[i].end)
        }
        start.sort((a, b) => a - b)
        end.sort((a, b) => a - b)
        
        let count = 0;;
        let result = 0;
        let s= 0;
        let e= 0;
        while (s < start.length || e < end.length) {
            if (start[s] < end[e]) {
                count += 1;
                s += 1;
                if (count > result) {
                    result = count
                }
            } else {
                e += 1;
                count -= 1;
            }
        }
        return result
    }
}
