class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";
        for (let i = 0; i < strs.length; i++) {
            result += strs[i].length.toString() + "#" + strs[i]
        }
        console.log(result)
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0, 
        j = 0;
        while (i < str.length) {
            if (str[j] === "#") {
                const len = Number(str.slice(i, j));
                result.push(str.slice(j+1, j+len+1));
                j = j + len + 1;
                i = j;
            } else {
                j++;
            }
        }
        return result;;
    }
}
