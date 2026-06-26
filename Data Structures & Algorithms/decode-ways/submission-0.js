class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const dp = new Array(s.length+1).fill(0);
        dp[0] = 1;
        dp[1] = s[0] === "0" ? 0 : 1

        for (let i = 2; i <= s.length; i++) {
            const oneDigit = Number(s.slice(i-1, i))
            const twoDigit = Number(s.slice(i-2, i))
            if (oneDigit >=1 && oneDigit<=9) {
                dp[i] += dp[i-1]
            }
            if (twoDigit >=10 && twoDigit <=26) {
                dp[i] += dp[i-2]
            }
        }
        console.log(dp)
        return dp[s.length]
    }
}
