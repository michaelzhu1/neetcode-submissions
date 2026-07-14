class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let left = 1;
        let right = x;
        let mid = 0;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            const squared = mid * mid;
            if (squared === x) {
                return mid;
            } else if (squared > x) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return right;
    }
}
