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
            // first go from right to left and let the heaviest person go on the boat first. And then if 
            // the we can fit the smallest person with the heaviest person, then let the smallest person
            // go on the boat and move left pointer to the right, but if the smallest person does not fit,
            // then we keep the left pointer as it is and only let the heaviest person go on the boat alone,
            // hence only moving the right pointer to the left to decrement the right point.
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
