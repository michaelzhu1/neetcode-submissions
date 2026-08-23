class Solution {
    /**
     * @param {number} n
     * @return {number[][]}
     */
    generateMatrix(n) {
        let count = 1;
        let top = 0;
        let right = n - 1;
        let bottom = n - 1;
        let left = 0;
        const result = Array.from({length:n}, ()=> new Array(n));
        while (top <= bottom && left <= right) {
            for (let i = left; i <= right; i++) {
                result[top][i] = count;
                count++;
            }
            top++;
            for (let i = top; i <= bottom; i++) {
                result[i][right] = count;
                count++;
            }
            right--;
            if (left <= right) {
                for (let i = right; i >= left; i--) {
                    result[bottom][i] = count;
                    count++;
                }
                bottom--;
            }
            if (top <= bottom) {
                for (let i = bottom; i >= top; i--) {
                    result[i][left] = count;
                    count++;
                }
                left++;
            }
        }
        // console.log(result);
        return result;
    }
}
