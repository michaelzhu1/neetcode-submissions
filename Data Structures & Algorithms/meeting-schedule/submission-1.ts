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
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        intervals.sort((a, b) => a.start - b.start)
        let result = true;
        let latestEndTime = 0;
        for (let i = 0; i < intervals.length; i++) {
            const startTime = intervals[i].start;
            const endTime = intervals[i].end;
            if (startTime >= latestEndTime) {
                latestEndTime = endTime;
            } else {
                return false;
            }
        }
        return result
    }
}
