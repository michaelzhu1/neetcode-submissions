class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }
        const need = new Array(26).fill(0);
        const window = new Array(26).fill(0);

        const aCode = "a".charCodeAt(0);

        // build the freq of the str1
        for (let i = 0; i < s1.length; i++) {
            need[s1.charCodeAt(i) - aCode]++;
            window[s2.charCodeAt(i) - aCode]++;
        }

        function matches() {
            for (let i = 0; i < 26; i++) {
                if (need[i] !== window[i]) {
                    return false;
                }
            }
            return true;
        }

        // check the first window
        if (matches()) {
            return true;
        }

        for (let right = s1.length; right < s2.length; right++) {
            // add new right character into the window
            window[s2.charCodeAt(right) - aCode]++;

            // remove the left character from the window
            const left = right - s1.length;
            window[s2.charCodeAt(left) - aCode]--;
            if (matches()) {
                return true;
            }
        }
        return false;
    }
}
