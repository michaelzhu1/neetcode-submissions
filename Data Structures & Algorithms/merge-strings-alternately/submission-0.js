class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const minLength = Math.min(word1.length, word2.length);
        let result = "";
        for (let i = 0; i < minLength; i++) {
            result = result + word1[i] + word2[i];
        }
        result += word1.slice(minLength, word1.length);
        result += word2.slice(minLength, word2.length);
        return result
    }
}
