class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        // first sort the array is descending order
        people.sort((a, b) => a - b);
        let left = 0;
        let right = people.length - 1;
        let count = 0;
        while (left <= right) {
            const remain = limit - people[right];
            right--;
            count++;
            if (people[left] <= remain) {
                left++;
            }
        }
        return count;
    }
}
