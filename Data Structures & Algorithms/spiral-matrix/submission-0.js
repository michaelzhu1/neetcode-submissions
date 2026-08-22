class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
       let upper = 0;
       let right = matrix[0].length - 1;
       let lower = matrix.length - 1;
       let left = 0;
       const result = [];
       const row = matrix.length;
       const col = matrix[0].length;
       while (upper <= lower && left <= right) {
        // upper
        for (let i = left; i <= right; i++) {
            result.push(matrix[upper][i]);
        }
        upper++;
        // right
        for (let i = upper; i <= lower; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        // lower
        if (upper <= lower) {
            for (let i = right; i >=left; i--) {
                result.push(matrix[lower][i]);
            }
            lower--;
        }

        // left
        if (left <= right) {
            for (let i = lower; i >= upper; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }

       } 
       console.log(result)
       return result;
    }
}
