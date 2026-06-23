class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        const result: string = "";
        let maxCount = Infinity;
        const firstStr = strs[0].split("");
        for (let i = 1; i < strs.length; i++) {
            const strArr = strs[i].split("");
            let count = 0;
            for (let j = 0; j < strArr.length; j++) {
                console.log(strArr[j])
                console.log(firstStr[j])
                if (strArr[j] === firstStr[j]) {
                    count++;
                    // console.log(count)
                } else {
                    break;
                }
            }
            maxCount = Math.min(maxCount, count)
        }
        return firstStr.splice(0, maxCount).join("");
    }
}
