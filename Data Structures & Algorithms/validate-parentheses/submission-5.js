class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length %2 !== 0) {
            return false;
        }
        const dict = {"]": "[", ")": "(", "}": "{"};
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            if (!(s[i] in dict)) {
                stack.push(s[i]);
            } else {
                const lastEle = stack.pop();
                if (dict[s[i]] !== lastEle) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
