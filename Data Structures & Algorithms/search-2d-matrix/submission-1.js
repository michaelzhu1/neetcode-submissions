class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // first find the right array that contains the target
        let first = 0;
        let last = matrix.length - 1;
        const n = matrix[0].length;
        let correctArr;
        while (first <= last) {
            const mid = Math.floor((first + last) / 2);
            const midArr = matrix[mid];
            if (midArr[n-1] < target) {
                first = mid + 1;
            } else if (midArr[0] > target) {
                last = mid - 1;
            } else {
                correctArr = midArr;
                break;
            }
        }
        if (!correctArr) {
            return false;
        }
        let left = 0;
        let right = n - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (correctArr[mid] === target) {
                return true;
            } else if (correctArr[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return false;
    }
}
