class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // first we need to sort the array in order to use binary search
        piles.sort((a, b) => a - b);
        let left = 1;
        let right = piles[piles.length - 1];
        if (piles.length === 1) {
            return Math.ceil(piles[0] / h)
        }
        let k = 0;
        while (left <= right) {
            k = Math.floor((left + right)/ 2);
            let hoursNeeded = 0;
            for (const p of piles) {
                hoursNeeded += Math.ceil(p / k);
            }
            if (hoursNeeded <= h) {
                right = k - 1;
            } else {
                left = k + 1;
            }
        }
        return left;
    }
}
