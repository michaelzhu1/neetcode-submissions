class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        for (let i = 0; i < operations.length; i++) {
            const char = operations[i];
            if (!Number.isNaN(Number(char))) {
                stack.push(Number(char))
            } else if (char === '+') {
                const prevScore = stack[stack.length - 1];
                const prevPrevScore = stack[stack.length - 2];
                stack.push(prevScore + prevPrevScore);
            } else if (char === 'D') {
                const prevScore = stack[stack.length - 1];
                stack.push(prevScore*2);
            } else if (char === 'C') {
                stack.pop()
            }
        }
        const total = stack.reduce((accumulator, curr) => accumulator + curr, 0);
        return total;
    }
}
