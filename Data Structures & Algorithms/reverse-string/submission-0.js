class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let l = 0,
        r = s.length - 1;
        while (l <= r) {
            let leftTemp = s[l];
            s[l] = s[r];
            s[r] = leftTemp;
            l++;
            r--;
        }
        return s;
    }
}
