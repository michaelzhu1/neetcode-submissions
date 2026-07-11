class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        const stack = [];
        for (const log of logs) {
            if (log === "../") {
                stack.pop();
            } else if (log === "./") {
                continue;
            } else {
                stack.push(log);
            }
        }
        return stack.length;
    }
}
