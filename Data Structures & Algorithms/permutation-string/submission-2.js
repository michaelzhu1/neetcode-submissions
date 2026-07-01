class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let l = 0;
        let r = s1.length -1;
        const s1Sorted = s1.split("").sort().join("")
        while (r < s2.length) {
            const substr = s2.slice(l, r+1).split("").sort().join("");
            if (substr === s1Sorted) {
                return true;
            }
            l++;
            r++;
        }
        return false;
    }
}
