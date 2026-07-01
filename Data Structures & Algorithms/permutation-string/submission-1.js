class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // const map = new Map();
        // for (let i = 0; i < s1.length; i++) {
        //     if (map.has(s1[i])) {
        //         map.set(s1[i], map.get(s1[i]) + 1);
        //     } else {
        //         map.set(s1[i], 1);
        //     }
        // }
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
